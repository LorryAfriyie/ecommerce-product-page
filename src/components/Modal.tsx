import { useCart } from "../context/CartContext.tsx";

function Modal(props: any) {
  const { setOpenModal, openModal } = useCart();

  function closeModal() {
    setOpenModal((current) => !current);
  }

  return (
    <>
      {openModal && (
        <div className={"modal-container"}>
          <div className={"modal"}>
            <div className={"modal__header"}>
              <p>Checkout</p>
            </div>

            <div className={"modal__body"}>{props.children}</div>

            <div className={"modal__footer"}>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
