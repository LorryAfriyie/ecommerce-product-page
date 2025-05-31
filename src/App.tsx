import { Navbar } from "./components/Navbar";
import { Hero } from "./views/HeroPage";
import { CartProvider } from "./context/CartContext.tsx";
import { useRef } from "react";
import Modal from "./components/Modal.tsx";

function App() {
  const overlay = useRef<HTMLDivElement>(null);

  const show = () => {
    if (overlay.current) {
      overlay.current.style.display = "block";
    }
  };

  const hide = () => {
    if (overlay.current) {
      overlay.current.style.display = "none";
    }
  };

  return (
    <div className="app">
      <CartProvider>
        <Navbar show={show} hide={hide} />
        <Hero />

        <Modal>
          <p>Thank you for purchasing our Fall Limited Edition Sneakers!</p>
        </Modal>

        <div className="another-overlay" ref={overlay}></div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Lorry Afriyie</a>.
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
