let greetingUser = document.querySelector("#greeting");
let menuDıv = document.querySelector("#menu");
let searchArea = document.querySelector("#search");

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(json => {greetingUser.innerText=`Hoşgeldiniz ${json.name} ~`});
//endpointten aldığı bilgiyi diziye clonelar.
var foods=[];
fetch("https://jsonplaceholder.typicode.com/todos" )
.then(response=>response.json())
.then(data=>{ foods = [...data]})
function addFavorites(item){
    console.log('tıklandı');
}
//div oluşturur.
function createDiv(food){
        menuDıv.innerHTML='';
        food.map((item)=>{
        let cardDiv = document.createElement('div');
        let cardTitle = document.createElement('p');
        let favButton = document.createElement('button');
        let heart = document.createElement('i');
        favButton.className="icon-click-area";
        favButton.setAttribute("id","heart");
        heart.className="far fa-heart icon-color"; 
        heart.setAttribute("id",item.id);        
        cardDiv.className = "cards";
        cardTitle.innerText = item.title;
        cardTitle.className ="card-title";
        cardDiv.appendChild(cardTitle);
        favButton.appendChild(heart);
        cardDiv.appendChild(favButton);
        menuDıv.appendChild(cardDiv);
        favButton.onclick = ()=>{
            let keys =Object.keys(localStorage);
            keys.forEach((value)=>{
                if(value==item.id){
                    console.log("içerde");
                    removeFavorites(value);
                }else{
                    localStorage.setItem(item.id, "favFood");
                    let added = document.getElementById(item.id);
                    added.className ="fas fa-heart icon-color";          
                }
            })
            if(keys==""){
                localStorage.setItem(item.id, "favFood");
                let added = document.getElementById(item.id);
                added.className ="fas fa-heart icon-color"; 
            }

        }
  })
}

setInterval(search(),2000); //search işleminin 2sn'de bir gerçekleşmesini sağlar.
//search yapar
function search(){
    searchArea.addEventListener('keyup',()=>{    
        let searched = foods.filter((item)=>{
            if(item.title.includes(searchArea.value)){
                return item;
            }
        })
        createDiv(searched);
        addFavorites();
    })
}
//favorilere ekleme işlemini yapar.
function addFavorites(){
  let favFooods = [];
  let keys =Object.keys(localStorage);
  keys.forEach((item)=>{
    if(localStorage.getItem(item)=="favFood"){
        let add = document.getElementById(item);
        add.className ="fas fa-heart icon-color";
    }
  })
  console.log(keys);  
}
//favorilerden sime işlemini yapar.
function removeFavorites(key){
    let add = document.getElementById(key);
    add.className ="far fa-heart icon-color2";
    localStorage.removeItem(key);
}




  



