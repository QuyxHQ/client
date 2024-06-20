import { useParams } from 'react-router-dom';
import { Auction, Fixed } from './components';

const Sale = ({ type }: { type: 'auction' | 'fixed' }) => {
    const { address } = useParams();

    return type == 'auction' ? (
        <Auction address={address!} />
    ) : type == 'fixed' ? (
        <Fixed address={address!} />
    ) : null;
};

export default Sale;
