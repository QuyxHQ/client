import { useContext } from 'react';
import { ModalContext } from '../context/ModalProvider';

export default function () {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within an ModalProvider');

    return context;
}
