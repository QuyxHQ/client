import { Address } from 'ton-core';
import useItem from '../../../hooks/useItem';
import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { isValidAddress, sleep } from '../../../../utils/helper';
import toast from '../../../../utils/toast';
import useModal from '../../../hooks/useModal';

const TransferModalContent = ({ address }: { address: string }) => {
    const { contract, methods } = useItem(Address.parse(address));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { onChange, onSubmit, values } = useForm(transfer, { to: '' });
    const { closeModal } = useModal();

    async function transfer() {
        if (!values.to || !contract || isLoading) return;

        if (!isValidAddress(values.to)) {
            toast({ type: 'error', message: 'Invalid address provided' });
            return;
        }

        setIsLoading(true);

        try {
            const to = Address.parse(values.to);
            await methods.transfer(to);

            let is_verified = false;
            let count = 10;

            while (!is_verified && count > 0) {
                const data = await methods.getNftItemData();

                if (data && data.owner.equals(to)) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2.5);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            toast({
                type: 'success',
                message: `nft successfully transferred to: ${to.toString()}`,
            });

            closeModal();
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="transfer-modal">
            <h2>Enter receipient address</h2>
            <p className="mb-3">
                The nft will be sent to this address. Be careful when sending an nft to another
                user.
            </p>

            <form action="#" onSubmit={onSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="to" className="ps-0">
                        Receipient address
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        name="to"
                        id="to"
                        value={values.to}
                        onChange={onChange}
                        required
                        placeholder="Enter address"
                    />
                </div>

                <button disabled={isLoading}>
                    {isLoading ? (
                        <span
                            className="loader-span-sm"
                            style={{ width: '17px', height: '17px', borderTopColor: '#000' }}
                        />
                    ) : (
                        <>
                            <span>Send</span>
                            <i className="h h-send" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default TransferModalContent;
