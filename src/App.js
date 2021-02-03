import "./App.css";
import Circles from "./components/Circles";
import Inputs from "./components/Inputs";
import Hatz from "./components/Hatz";
import Squares from "./components/Squares";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Inputs />
        <Circles />
        <Squares />
        <Hatz />
      </RecoilRoot>
    </div>
  );
}

export default App;
