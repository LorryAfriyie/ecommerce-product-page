import { Navbar } from "./components/Navbar";
import { Hero } from "./views/HeroPage";
import { CartProvider } from "./context/CartContext.tsx";
import { useRef } from "react";
import Modal from "./components/Modal.tsx";

function App() {
  const overlay = useRef<HTMLDivElement>(null);

  return (
    <div className="app">
      <CartProvider>
        <Navbar ref={overlay} />
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
