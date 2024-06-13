import { Address } from 'ton-core';
import { useEffect, useState } from 'react';
import { approx } from '../../../utils/helper';
import { AnchorLink, TonIcon } from '..';
import useApi from '../../hooks/useApi';
import useApp from '../../hooks/useApp';

type CardProps = Resp & {
    className?: string;
};

const Card = ({ nft, user, isBookmarked, className }: CardProps) => {
    const [bookmark, setBookmark] = useState<boolean>(isBookmarked);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user: whoami } = useApp();

    useEffect(() => setBookmark(isBookmarked), [isBookmarked]);

    async function toggleBookmark() {
        if (!whoami || isLoading) return;
        setIsLoading(true);

        const { bookmark: sdk } = await useApi();

        let resp: boolean = false;

        if (bookmark) {
            const response = await sdk.removeBookmark(nft.address);
            if (response) resp = false;
        } else {
            const response = await sdk.addToBookmark(nft.address);
            if (response) resp = true;
        }

        setBookmark(resp);
        setIsLoading(false);
    }

    return (
        <div className={`nft-card ${className}`}>
            <div className="position-relative">
                <span
                    className={`position-absolute ${isLoading ? 'disabled' : ''}`}
                    onClick={toggleBookmark}
                >
                    {isLoading ? (
                        <span className="loader-span-sm" />
                    ) : bookmark ? (
                        <i className="h h-heart red" />
                    ) : (
                        <i className="h h-heart" />
                    )}
                </span>

                <AnchorLink to={`/nft/${Address.parse(nft.address).toString()}`}>
                    <img className="main" src={nft.metadata.image} alt={nft.metadata.name} />
                </AnchorLink>

                <div className="position-absolute">
                    <AnchorLink to={`/user/${user?.username}`}>
                        <img
                            src={user?.pfp ? user.pfp : '/images/default-user.png'}
                            alt={user?.username}
                        />
                    </AnchorLink>
                </div>
            </div>

            <div className="body">
                <AnchorLink to={`/nft/${Address.parse(nft.address)}`}>
                    <h3>{nft.metadata.name || '@--'}</h3>

                    <p className="price">
                        <TonIcon size={18} />
                        <span>{nft.sale ? approx(nft.sale.price.value) : '-'}</span>
                    </p>
                </AnchorLink>
            </div>
        </div>
    );
};

export default Card;
