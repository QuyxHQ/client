import { Address, toNano } from 'ton-core';
import { TonIcon } from '../../..';
import { approx } from '../../../../utils/helper';
import { FixPriceData } from '../../../../contract/artefacts/tact_FixedSaleContract';
import useFixedSaleContract from '../../../hooks/useFixedSaleContract';
import { useState } from 'react';
import useApp from '../../../hooks/useApp';
import toast from '../../../../utils/toast';

type Props = {
    sale_data: FixPriceData;
    address: Address;
};

const RenderFixSale = ({ sale_data, address }: Props) => {
    const { contract } = useFixedSaleContract(address);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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

    return (
        <>
            <div className="fixed-sale py-2">
                <div>
                    <hr />
                    <p>Price</p>
                </div>

                <h3>
                    <TonIcon size={30} />
                    <span>{approx(sale_data.full_price + toNano(0.1))}</span>
                </h3>
            </div>

            <button className="bg-dark text-white" onClick={buy}>
                Buy now
            </button>
        </>
    );
};

export default RenderFixSale;
