import { useCharacter } from "../context/CharacterContext";

function Characters() {
  const { setCharacter } = useCharacter();
  return (
    <div>
      <select
        value="Characters"
        onChange={(e) => setCharacter(e.target.value)}
        className="characters"
      >
        <option value="">Choose character</option>
        <option value="SpaceShip">Space Ship</option>
        <option value="Ufo">Ufo</option>
      </select>
    </div>
  );
}

export default Characters;
