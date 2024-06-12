//@ts-nocheck
import { AnchorLink, TonIcon } from '..';

const Card = ({ data, className }: { data: NftItem; className?: string }) => {
    return <div>{JSON.stringify(data)}</div>;
};

export default Card;
