import { Address, fromNano, toNano } from 'ton-core';
import { AuctionInfo } from '../../../../contract/artefacts/tact_NftItem';
import { useEffect, useState } from 'react';
import useItem from '../../../hooks/useItem';
import useApi from '../../../hooks/useApi';
import { AnchorLink, TonIcon, VerifiedIcon } from '../../..';
import useModal from '../../../hooks/useModal';
import toast from '../../../../utils/toast';
import { useNavigate } from 'react-router-dom';
import useApp from '../../../hooks/useApp';
import { approx, calcCountdown, getAvatar, sleep } from '../../../../utils/helper';

type Props = {
    address: Address;
    username: string;
    auction_info: AuctionInfo;
    user?: User;
};

const HasBeenClaimedContent = ({ address, username, auction_info, user }: Props) => {
    const { contract, methods } = useItem(address);
    const { closeModal } = useModal();
    const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { user: whoami } = useApp();

    async function completeAution() {
        if (isBtnLoading || !contract) return;
        if (!whoami) {
            toast({ type: 'info', message: 'Connect wallet first' });
            return;
        }

        setIsBtnLoading(true);

        let is_verified = false;
        let count = 13;

        try {
            await methods.completeAuction();

            while (!is_verified && count > 0) {
                const data = await methods.getNftAuctionInfo();

                if (data && data.max_bid_address == null) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2.5);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            closeModal();
            navigate(`/nft/${address.toString()}`);
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
            navigate(-1);
        } finally {
            setIsBtnLoading(false);
        }
    }

    async function placeBid() {
        if (isBtnLoading || !contract) return;
        if (!whoami) {
            toast({ type: 'info', message: 'Connect wallet first' });
            return;
        }

        const current_bid = fromNano(auction_info.max_bid_amount);
        const min = (Number(current_bid) * 105) / 100;
        const message = `Enter your bid amount\n\nNB: Not less than ${min.toFixed(2)} TON`;
        const prompt_resp = prompt(message, min.toFixed(2));
        if (!prompt_resp) return;

        const value = Number(prompt_resp);

        if (isNaN(value)) {
            toast({
                type: 'error',
                message: 'Not a valid number!',
            });

            return;
        }

        if (toNano(value) < toNano(min)) {
            toast({
                type: 'error',
                message: `Bid amount should be greater than ${min.toFixed(2)} TON`,
            });

            return;
        }

        setIsBtnLoading(true);

        let is_verified = false;
        let count = 13;

        try {
            await methods.placeBid(value);

            while (!is_verified && count > 0) {
                const data = await methods.getNftAuctionInfo();

                if (
                    data &&
                    data.max_bid_address &&
                    data.max_bid_address.toString() == Address.parse(whoami.address).toString() &&
                    data.max_bid_amount > auction_info.max_bid_amount
                ) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2.5);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            const { misc } = await useApi();
            // to update our db
            await misc.triggerPendingUsernameUpdate(address.toRawString());

            closeModal();
            navigate(`/nft/${address.toString()}`);
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
            navigate(-1);
        } finally {
            setIsBtnLoading(false);
        }
    }

    const [timeLeft, setTimeLeft] = useState(
        calcCountdown(Number(auction_info.auction_end_time) * 1000)
    );

    useEffect(() => {
        if (auction_info.auction_end_time == 0n) return;

        const timer = setInterval(() => {
            const time = auction_info.auction_end_time;

            setTimeLeft(calcCountdown(Number(time) * 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, [auction_info]);

    return (
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
                                        src={getAvatar(user?.pfp!, user?.username!)}
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
                                                src={getAvatar(user?.pfp!, user?.username!)}
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

                    {timeLeft.hours == '00' &&
                    timeLeft.minutes == '00' &&
                    timeLeft.seconds == '00' ? (
                        <button onClick={completeAution} disabled={isBtnLoading}>
                            {isBtnLoading ? (
                                <span
                                    className="loader-span-sm"
                                    style={{ width: '17px', height: '17px' }}
                                />
                            ) : (
                                <>
                                    <i className="h h-check" />
                                    <span>Complete auction</span>
                                </>
                            )}
                        </button>
                    ) : (
                        <>
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
                        </>
                    )}

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
