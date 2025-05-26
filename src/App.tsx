import { Navbar } from "./components/Navbar";
import { Hero } from "./views/HeroPage";
import { CartProvider } from "./context/CartContext.tsx";
import { useRef } from "react";

function App() {
  const overlay = useRef<HTMLDivElement>(null);

  return (
    <div className="app">
      <CartProvider>
        <Navbar ref={overlay} />

        <Hero />
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
