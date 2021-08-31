import {createContext, useState,useContext} from 'react';

const CharacterContext = createContext();

export const CharacterPorvider = ({ children }) => {
    const [character, setCharacter] = useState('Ufo');
    const values = {
    character, 
    setCharacter
    };
    return <CharacterContext.Provider value={values}>{children}</CharacterContext.Provider>
};
 
export const useCharacter = ()=> useContext(CharacterContext)
export default {useCharacter, CharacterContext};