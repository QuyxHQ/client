import { Address } from 'ton-core';
import { AnchorLink, TonIcon } from '../../..';
import { AuctionData } from '../../../../contract/artefacts/tact_AuctionContract';
import { approx, calcCountdown, getAvatar } from '../../../../utils/helper';
import { useEffect, useState } from 'react';
import useApi from '../../../hooks/useApi';
import useAuctionContract from '../../../hooks/useAuctionContract';
import toast from '../../../../utils/toast';
import useApp from '../../../hooks/useApp';

type Props = {
    auction_data: AuctionData;
    address: Address;
};

const RenderAuction = ({ auction_data, address }: Props) => {
    const [timeLeft, setTimeLeft] = useState(calcCountdown(Number(auction_data.end_time) * 1000));
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>();
    const { contract } = useAuctionContract(address);
    const { user: whoami } = useApp();

    async function buy() {
        if (isLoading || !contract || !whoami) return;
        setIsLoading(true);

        try {
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    async function placeBid() {
        if (isLoading || !contract || !whoami) return;
        setIsLoading(true);

        try {
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        (async function () {
            if (auction_data.last_bid == 0n) return;

            const { user: sdk } = await useApi();
            setUser(await sdk.getUser(auction_data.last_member.toString()));
        })();
    }, [auction_data]);

    useEffect(() => {
        if (auction_data.end_time == 0n) return;

        const timer = setInterval(() => {
            const time = auction_data.end_time;

            setTimeLeft(calcCountdown(Number(time) * 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, [auction_data]);

    return (
        <>
            <div className="timer">
                <div>{timeLeft.days} days</div>
                <span>:</span>
                <div>{timeLeft.hours}</div>
                <span>:</span>
                <div>{timeLeft.minutes}</div>
                <span>:</span>
                <div>{timeLeft.seconds}</div>
            </div>

            <div className="auction-sale mb-1">
                {auction_data.last_bid != 0n ? (
                    !user ? null : (
                        <div className="user">
                            <AnchorLink to={`/user/${user.username}`}>
                                <img src={getAvatar(user.pfp || null, user.username)} alt="" />
                            </AnchorLink>

                            <div>
                                <h4>
                                    <TonIcon />
                                    <span>{approx(auction_data.last_bid)}</span>
                                </h4>
                                <p>Highest bidder</p>
                            </div>
                        </div>
                    )
                ) : null}

                <div className="top">
                    <ul>
                        <li>
                            <div>
                                <p>min. bid</p>
                            </div>

                            <p>
                                <TonIcon />
                                <span>{approx(auction_data.min_bid)}</span>
                            </p>
                        </li>

                        {auction_data.max_bid != 0n ? (
                            <li>
                                <div>
                                    <p>max. bid</p>
                                    <span>Press "Buy now" to buy</span>
                                </div>

                                <p>
                                    <TonIcon />
                                    <span>{approx(auction_data.max_bid)}</span>
                                </p>
                            </li>
                        ) : null}
                    </ul>
                </div>

                <div className="down">
                    <p>
                        <span>Bid step:</span> {auction_data.min_step.toString()}%
                    </p>
                </div>
            </div>

            <div className="d-flex align-items-center" style={{ gap: '0.7rem' }} onClick={buy}>
                {auction_data.max_bid != 0n ? (
                    <button className="w-100" disabled={isLoading}>
                        {isLoading ? (
                            <span
                                className="loader-span-sm"
                                style={{ width: '17px', height: '17px', borderTopColor: '#000' }}
                            />
                        ) : (
                            'Buy now'
                        )}
                    </button>
                ) : null}

                <button
                    className="bg-dark text-white w-100"
                    disabled={isLoading}
                    onClick={placeBid}
                >
                    {isLoading ? (
                        <span
                            className="loader-span-sm"
                            style={{ width: '17px', height: '17px' }}
                        />
                    ) : (
                        'Place bid'
                    )}
                </button>
            </div>
        </>
    );
};

export default RenderAuction;
