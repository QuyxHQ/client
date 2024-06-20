import { useEffect, useState } from 'react';
import { AuctionInfo } from '../../../../contract/artefacts/tact_NftItem';
import { approx, calcCountdown, getAvatar, getMinBid, sleep } from '../../../../utils/helper';
import useItem from '../../../hooks/useItem';
import { Address, fromNano, toNano } from 'ton-core';
import toast from '../../../../utils/toast';
import useApp from '../../../hooks/useApp';
import useApi from '../../../hooks/useApi';
import { AnchorLink, TonIcon } from '../../..';

type Props = {
    auction_info: AuctionInfo;
    address: Address;
};

const RenderPendingClaim = ({ auction_info, address }: Props) => {
    const { contract, methods } = useItem(address);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState(
        calcCountdown(Number(auction_info.auction_end_time) * 1000)
    );
    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async function () {
            if (!auction_info.max_bid_address) return;

            const { user } = await useApi();
            setUser(await user.getUser(auction_info.max_bid_address.toString()));
        })();
    }, [auction_info]);

    const { user: whoami } = useApp();

    async function completeAution() {
        if (isLoading || !contract) return;
        if (!whoami) {
            toast({ type: 'info', message: 'Connect wallet first' });
            return;
        }

        setIsLoading(true);

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
            window.location.reload();
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    async function placeBid() {
        if (isLoading || !contract) return;
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

        setIsLoading(true);

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
            window.location.reload();
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (auction_info.auction_end_time == 0n) return;

        const timer = setInterval(() => {
            const time = auction_info.auction_end_time;

            setTimeLeft(calcCountdown(Number(time) * 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, [auction_info]);

    return (
        <>
            <div className="timer">
                <div>{timeLeft.hours} hours</div>
                <span>:</span>
                <div>{timeLeft.minutes}</div>
                <span>:</span>
                <div>{timeLeft.seconds}</div>
            </div>

            <div className="auction-sale mb-1">
                {!user ? null : (
                    <div className="user">
                        <AnchorLink to={`/user/${user.username}`}>
                            <img src={getAvatar(user.pfp || null, user.username)} alt="" />
                        </AnchorLink>

                        <div>
                            <h4>
                                <TonIcon />
                                <span>{approx(auction_info.max_bid_amount)}</span>
                            </h4>
                            <p>Highest bidder</p>
                        </div>
                    </div>
                )}

                <div className="top">
                    <ul>
                        <li>
                            <div>
                                <p>min. bid</p>
                            </div>

                            <p>
                                <TonIcon />
                                <span>{getMinBid(auction_info.max_bid_amount, 5)}</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="down">
                    <p>
                        <span>Bid step:</span> 5%
                    </p>
                </div>
            </div>

            {timeLeft.hours == '00' && timeLeft.minutes == '00' && timeLeft.seconds == '00' ? (
                <button className="w-100" onClick={completeAution} disabled={isLoading}>
                    {isLoading ? (
                        <span
                            className="loader-span-sm"
                            style={{ width: '17px', height: '17px', borderTopColor: '#000' }}
                        />
                    ) : (
                        'Complete auction'
                    )}
                </button>
            ) : (
                <button className="w-100" onClick={placeBid} disabled={isLoading}>
                    {isLoading ? (
                        <span
                            className="loader-span-sm"
                            style={{ width: '17px', height: '17px', borderTopColor: '#fff' }}
                        />
                    ) : (
                        'Place bid'
                    )}
                </button>
            )}
        </>
    );
};

export default RenderPendingClaim;
