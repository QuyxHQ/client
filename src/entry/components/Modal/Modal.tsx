import { useEffect } from "react";
import { useAppStore } from "../../context/AppProvider";

const Modal = () => {
  const { displayModal, modalBody, closeModal } = useAppStore();

  useEffect(() => {
    if (displayModal) document.body.classList.add("scroll-disabled");
    else document.body.classList.remove("scroll-disabled");
  }, [displayModal]);

  return (
    <div className={`modal ${displayModal ? "d-flex" : "d-none"}`}>
      <div className="modal-body position-relative">
        <div className="close position-absolute" onClick={closeModal}>
          <i className="h h-x" />
        </div>

        <div className="body">{modalBody ?? "modal content here"}</div>
      </div>
    </div>
  );
};

export default Modal;
