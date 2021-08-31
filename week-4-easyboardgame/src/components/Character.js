import { useState, useEffect } from "react";
import { useCharacter } from "../context/CharacterContext";
import { getInitialValues } from "../utils/getValues";
import styled from "styled-components";

import Ufo from "../img/Ufo.png";
import SpaceShip from "../img/SpaceShip.png";

//styled component
const Char = styled.img`
  width: 5rem;
  height: 5rem;
  left: ${({ x }) => x + "px"};
  top: ${({ y }) => y + "px"};
  position: absolute;
`;

function Character() {
  const { character } = useCharacter();
  const setSrc = SpaceShip.toString().includes(character) ? SpaceShip : Ufo;

  const [x, setX] = useState(parseInt(localStorage.getItem("x")));
  const [y, setY] = useState(parseInt(localStorage.getItem("y")));
  let speed = 20;

  //Karakterin hareketini kontrol eder ve localStorage kayıt işlemlerini yapar.
  function handleKeyPress(e) {
    let { initialX, initialY } = getInitialValues();
    if (e.keyCode == "39" && initialX < 400) {
      setX(initialX + speed);
      localStorage.setItem("x", initialX + speed);
    } else if (e.keyCode == "37" && initialX > 0) {
      setX(initialX - speed);
      localStorage.setItem("x", initialX - speed);
    } else if (e.keyCode == "38" && initialY > 0) {
      setY(initialY - speed);
      localStorage.setItem("y", initialY - speed);
    } else if (e.keyCode == "40" && initialY < 400) {
      setY(initialY + speed);
      localStorage.setItem("y", initialY + speed);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return <Char src={setSrc} x={x} y={y}></Char>;
}

export default Character;
