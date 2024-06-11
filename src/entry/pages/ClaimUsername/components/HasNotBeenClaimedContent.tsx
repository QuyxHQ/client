import { getUsernameMinPrice } from '../../../../utils/helper';
import { TonIcon } from '../../..';
import { useEffect, useState } from 'react';
import toast from '../../../../utils/toast';
import useCollection from '../../../hooks/useCollection';
import useTonConnect from '../../../hooks/useTonConnect';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../hooks/useModal';

type Props = {
    username: string;
    address: string;
};

const HasNotBeenClaimedContent = ({ username, address }: Props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [price, setPrice] = useState<string>('0');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { contract, methods } = useCollection();
    const { connected } = useTonConnect();
    const navigate = useNavigate();
    const { closeModal } = useModal();

    useEffect(() => setPrice(String(getUsernameMinPrice(username))), [username]);

    async function bid() {
        if (Number(price) < getUsernameMinPrice(username)) {
            toast({
                type: 'error',
                message: `Oops! Value cannot be less than ${getUsernameMinPrice(username)} TON`,
            });

            return;
        }

        if (isLoading || !contract) return;

        setIsLoading(true);

        try {
            await methods.claimUsername(username, String(Number(price) + 0.02));

            closeModal();
            navigate(`/nft/${address}`, {
                state: {
                    just_claimed: true,
                },
            });
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
            navigate(-1);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="claim-modal">
            <span className="badge green">Available</span>

            <h3>{username}</h3>

            <div className="body">
                <div className="form-div px-2">
                    <p>min. price</p>

                    <div className={`d-flex align-items-center ${isFocused ? 'focused' : ''}`}>
                        <div className="ps-3 mt-1">
                            <TonIcon size={15} />
                        </div>
                        <input
                            type="number"
                            min={price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                </div>

                <hr className="my-3" />

                <p className="px-2">
                    The username can be purchased at an open auction. To start the auction, make the
                    first bid.
                </p>
            </div>

            <button onClick={bid} disabled={isLoading || !connected}>
                {isLoading ? (
                    <span className="loader-span-sm" style={{ width: '17px', height: '17px' }} />
                ) : (
                    <>
                        <i className="h h-check" />
                        <span>Start auction</span>
                    </>
                )}
            </button>

            {!connected ? <p className="error">Connect your wallet to place bid</p> : null}
        </div>
    );
};

export default HasNotBeenClaimedContent;
