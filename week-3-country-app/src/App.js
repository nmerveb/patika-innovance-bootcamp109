import Countries from "./components/Countries";
import Statistics from "./components/Statistics";

import './App.css';
import { useState, useEffect } from "react";

function App() {
 const [ data, setData]= useState("countries");
 const [countries, setCountries] = useState([]);
 
 //get api's data
 useEffect(()=>{
     fetch("https://restcountries.eu/rest/v2/all")
       .then((res) => res.json())
       .then((data) => {
         setCountries(data);     
       });
 },[])
 
  return (
    <div className="App">     
      <div className="menu">
        <span>
           <button className="btn" name="countries" onClick={(e)=>setData(e.target.name)}>Countries</button>
        </span>
        <span>
           <button className="btn" name="statistics" onClick={(e)=>setData(e.target.name)}>Statistics</button>
        </span>
      </div>
      <div>
         {(data==="countries")?<Countries countries={countries}/>:<Statistics countries={countries}/>}
      </div>

    </div>
  );
}

export default App;
