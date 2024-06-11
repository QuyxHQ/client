import { Address, fromNano, toNano } from 'ton-core';
import { AuctionInfo, NftItemData } from '../../../../contract/artefacts/tact_NftItem';
import { useEffect, useState } from 'react';
import useItem from '../../../hooks/useItem';
import useApi from '../../../hooks/useApi';
import { AnchorLink, TonIcon, VerifiedIcon } from '../../..';
import useModal from '../../../hooks/useModal';
import toast from '../../../../utils/toast';
import { useNavigate } from 'react-router-dom';
import useApp from '../../../hooks/useApp';
import { sleep } from '../../../../utils/helper';

type Props = {
    address: Address;
    username: string;
    auction_info: AuctionInfo;
    nft_data: NftItemData;
};

function approx(number: bigint) {
    return Number(fromNano(number)).toFixed(2);
}

const HasBeenClaimedContent = ({ address, username, auction_info, nft_data }: Props) => {
    const { contract, methods } = useItem(address);
    const { closeModal } = useModal();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();
    const { user: whoami } = useApp();

    async function placeBid() {
        if (isBtnLoading || !contract || !whoami) return;

        const min = approx(auction_info.max_bid_amount);
        const message = `Enter your bid amount\n\nNB: Not less than ${min} TON`;
        const value = Number(prompt(message, min));

        if (isNaN(value)) {
            toast({
                type: 'error',
                message: 'Not a valid number!',
            });

            return;
        }

        if (toNano(value) < auction_info.max_bid_amount) {
            toast({
                type: 'error',
                message: `Bid amount should not be greater than ${min} TON`,
            });

            return;
        }

        setIsBtnLoading(true);

        let is_verified = false;
        let count = 10;

        try {
            await methods.placeBid(value);

            while (!is_verified && count > 0) {
                const data = await methods.getNftAuctionInfo();

                if (
                    data &&
                    data.max_bid_address &&
                    data.max_bid_address.toString() == Address.parse(whoami.address).toString()
                ) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            closeModal();
            navigate(`/nft/${address.toString()}`, {
                state: {
                    just_placed_bid: true,
                },
            });
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
            navigate(-1);
        } finally {
            setIsBtnLoading(false);
        }
    }

    const calcCountdown = (time: number) => {
        const now = new Date().getTime();
        const distance = new Date(time).getTime() - now;

        if (distance < 0) {
            return {
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };

    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        if (auction_info.auction_end_time == 0n) return;

        const timer = setInterval(() => {
            const time = auction_info.auction_end_time;

            setTimeLeft(calcCountdown(Number(time) * 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, [auction_info]);

    useEffect(() => {
        (async function () {
            if (!contract) return;

            let { max_bid_address: addr } = auction_info;
            if (!addr) addr = nft_data.owner;

            const { user } = await useApi();

            setUser(await user.getUser(addr.toString()));
            setIsLoading(false);
        })();
    }, [auction_info, nft_data, contract]);

    return isLoading ? (
        <div className="d-flex align-items-center justify-content-center py-5">
            <span className="loader-span-sm" />
        </div>
    ) : (
        <div className="claim-modal">
            <span className={`badge ${auction_info.max_bid_address == null ? 'red' : 'gold'}`}>
                {auction_info.max_bid_address == null ? 'Taken' : 'In Auction'}
            </span>

            <h3>{username}</h3>

            {auction_info.max_bid_address == null ? (
                <div>
                    <div className="body">
                        <p className="title">Owner info</p>

                        <div className="owner d-flex align-items-center justify-content-between">
                            <p>Owner</p>

                            <AnchorLink
                                to={`/user/${user?.username}`}
                                handleClick={closeModal}
                                className="user"
                            >
                                <div className="img">
                                    <img
                                        src={user?.pfp ?? '/images/default-user.png'}
                                        alt={user?.username}
                                    />
                                </div>

                                <p className="name">
                                    <span>{user?.username}</span>
                                    {user?.hasBlueTick ? <VerifiedIcon /> : null}
                                </p>
                            </AnchorLink>
                        </div>
                    </div>

                    <button
                        onClick={function () {
                            closeModal();
                            navigate(`/nft/${address.toString()}`);
                        }}
                    >
                        <i className="h h-external-link" />
                        <span>View username</span>
                    </button>
                </div>
            ) : (
                <div>
                    <div className="body">
                        <p className="title">Bid info</p>

                        <div className="info">
                            <ul>
                                <li>
                                    <p>Highest Bidder</p>

                                    <AnchorLink
                                        to={`/user/${user?.username}`}
                                        handleClick={closeModal}
                                        className="user"
                                    >
                                        <div className="img">
                                            <img
                                                src={
                                                    user?.pfp
                                                        ? user.pfp
                                                        : '/images/default-user.png'
                                                }
                                                alt={user?.username}
                                            />
                                        </div>

                                        <p className="name">
                                            <span>{user?.username}</span>
                                            {user?.hasBlueTick ? <VerifiedIcon /> : null}
                                        </p>
                                    </AnchorLink>
                                </li>

                                <li>
                                    <p>Current Bid</p>

                                    <div className="amt">
                                        <TonIcon />
                                        <p>{approx(auction_info.max_bid_amount)}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="body">
                        <p className="title">Ends In</p>

                        <div className="timer">
                            <div>{timeLeft.hours}</div>
                            <span>:</span>
                            <div>{timeLeft.minutes}</div>
                            <span>:</span>
                            <div>{timeLeft.seconds}</div>
                        </div>
                    </div>

                    <button onClick={placeBid} disabled={isBtnLoading}>
                        {isBtnLoading ? (
                            <span
                                className="loader-span-sm"
                                style={{ width: '17px', height: '17px' }}
                            />
                        ) : (
                            <>
                                <i className="h h-credit-card" />
                                <span>Place Bid</span>
                            </>
                        )}
                    </button>

                    <AnchorLink
                        className="link"
                        to={`/nft/${address.toString()}`}
                        handleClick={closeModal}
                    >
                        View username
                    </AnchorLink>
                </div>
            )}
        </div>
    );
};

export default HasBeenClaimedContent;
