import  "../App.css";

function Statistics({countries}) {
    const languageList=[];
    const popularLanguages =[];
    //finds languages and count of languages in array.
    const findLanguagesCount = (languages)=>{
        let sorted_languages = languages.slice().sort();
        let count =0;
        sorted_languages.forEach((language, index, array)=>{
            if(array[index+1]!==language){
                popularLanguages.push({"language":language, "count":count});
                count=0;
            }
            count++;
        })
    }

    //sorts languages by count
    const sortPopulars = (popularLanguages)=>{
        popularLanguages.sort((a, b)=> {return b.count - a.count;});
    }    
   
    countries.forEach((country)=>{
        country.languages.forEach((language)=>languageList.push(language.name));
    })
    findLanguagesCount(languageList);
    sortPopulars(popularLanguages);
    
    return (
        <div className="sub-menu">
        <h1>Most Spoken Languages Top 10</h1>
        {
            popularLanguages.slice(0,10).map((language,index)=>
            <div className="languages" key={index}>
                <span className="languages-text">{language.language}</span>
                <span className="languages-text">{language.count}</span>            
            </div>)
        }
        </div>
    )
}


export default Statistics
