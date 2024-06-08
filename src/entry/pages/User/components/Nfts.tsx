import { useQuery } from '@tanstack/react-query';
import useApi from '../../../hooks/useApi';
import { EmptyIcon } from '../../..';

const Nfts = ({ address }: { address: string }) => {
    const { isPending, data: nfts } = useQuery({
        queryKey: [`${address}-data`],
        queryFn: async function () {
            const { user } = await useApi();
            return await user.getUserNfts(address);
        },
    });

    return (
        <div className="nfts d-flex align-items-center justify-content-center my-5 my-lg-0">
            {isPending ? (
                <div
                    style={{ padding: '8rem 1rem', gap: '1.5rem' }}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <span className="loader-span-sm"></span>
                    <p style={{ opacity: 0.5 }}>Loading...</p>
                </div>
            ) : !nfts || nfts.length == 0 ? (
                <div>
                    <div
                        style={{ gap: '1.5rem' }}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <EmptyIcon width={110} height={110} />
                        <p
                            style={{
                                opacity: 0.6,
                                fontSize: '0.95rem',
                                fontWeight: 300,
                                textAlign: 'center',
                                lineHeight: '180%',
                            }}
                        >
                            Username/<small>s</small> owned by user will <br /> appear here
                        </p>
                    </div>
                </div>
            ) : (
                JSON.stringify(nfts)
            )}
        </div>
    );
};

export default Nfts;
