import { useEffect } from 'react';
import useModal from '../../hooks/useModal';

const Modal = () => {
    const { displayModal, modalBody, closeModal, canCloseModal } = useModal();

    function handleEsc(e: any) {
        if (e.keyCode === 27 && displayModal && canCloseModal) closeModal();
    }

    useEffect(() => {
        if (displayModal) document.body.classList.add('scroll-disabled');
        else document.body.classList.remove('scroll-disabled');

        if (displayModal) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [displayModal]);

    function handleOverlayClick(e: any) {
        if (e.target.classList.contains('modal') && canCloseModal) closeModal();
        return;
    }

    return (
        <div className={`modal ${displayModal ? 'd-flex' : 'd-none'}`} onClick={handleOverlayClick}>
            <div className="modal-body position-relative">
                {canCloseModal ? (
                    <div className="close position-absolute" onClick={closeModal}>
                        <i className="h h-x" />
                    </div>
                ) : null}

                <div className="body">{modalBody ?? 'Empty Modal'}</div>
            </div>
        </div>
    );
};

export default Modal;
