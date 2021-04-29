import "../styles/index.scss"
import Recipes from "./Recipes"
import sword from "../images/swc-sword.png"

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hi React</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
      </main>

      <Recipes />
    </>
  );
};

export default App;
