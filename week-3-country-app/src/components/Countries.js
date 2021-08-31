import  "../App.css";

function Countries({countries}) {
    return (
        <div className="sub-menu">
        {
            countries.map((country, index)=>
            <div className="cards" key={index}>
                <h3>{country.name}</h3>
                <img className="img"src={country.flag}></img>
                <p>Capital: {country.capital}</p>
                <p>Language: {country.languages[0].name}</p>               
                </div>)
        }
        </div>
    )
}

export default Countries
