import "./App.css";
import DropDownChar from "./components/DropDownChar";
import GameField from "./components/GameField";
import { CharacterPorvider } from "./context/CharacterContext";

function App() {
  return (
    <div className="App">
      <CharacterPorvider>
        <GameField />
        <DropDownChar />
      </CharacterPorvider>
    </div>
  );
}

export default App;
