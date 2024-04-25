import { createContext, useContext, useState } from "react";

type ModalContextProps = {
  displayModal: boolean;
  canCloseModal: boolean;
  modalBody?: React.JSX.Element;
  closeModal: () => void;
  openModal: () => void;
  setModalBody: React.Dispatch<React.SetStateAction<React.JSX.Element | undefined>>;
};

const ModalContext = createContext<ModalContextProps>({
  displayModal: false,
  canCloseModal: true,
  closeModal() {},
  openModal() {},
  setModalBody: () => {},
});

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: { children: React.JSX.Element }) => {
  const [canCloseModal, setCanCloseModal] = useState<boolean>(true);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<React.JSX.Element>();

  const openModal = (canClose = true) => {
    setCanCloseModal(canClose);
    setDisplayModal(true);
  };

  const closeModal = () => setDisplayModal(false);

  return (
    <ModalContext.Provider
      value={{ displayModal, canCloseModal, modalBody, setModalBody, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
