import { Navbar } from "./components/Navbar";
import { Hero } from "./views/HeroPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lorry Afriyie</a>.
      </div>
    </div>
  );
}

export default App;
