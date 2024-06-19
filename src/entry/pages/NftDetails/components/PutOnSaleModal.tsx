import { AnchorLink } from '../../..';
import useModal from '../../../hooks/useModal';

const PutOnSaleModal = ({ address }: { address: string }) => {
    const { closeModal } = useModal();

    return (
        <div className="put-on-sale">
            <h2>Put on Sale</h2>

            <ul>
                <li>
                    <AnchorLink to={`/sale/fixed/${address}`} handleClick={closeModal}>
                        <div>
                            <i className="h h-tag-full" />
                            <h4>Fixed Price</h4>
                        </div>

                        <i className="h h-chevron-right" />
                    </AnchorLink>
                </li>

                <li>
                    <AnchorLink to={`/sale/auction/${address}`} handleClick={closeModal}>
                        <div>
                            <i className="h h-layers" />
                            <h4>Auction</h4>
                        </div>

                        <i className="h h-chevron-right" />
                    </AnchorLink>
                </li>
            </ul>
        </div>
    );
};

export default PutOnSaleModal;
