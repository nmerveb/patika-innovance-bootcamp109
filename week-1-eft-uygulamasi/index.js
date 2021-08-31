const accountList = [
    {
        id: 1,
        iban: "12-3456-7890-1234-5678-90",
        balance: 10000
    },
    {
        id: 2,
        iban: "09-8765-4321-0987-6543-21",
        balance: 200
    },
    {
        id: 3,
        iban: "67-8901-2345-6789-0123-45",
        balance: 40
    }
  ];

let accounts = document.querySelector("#accounts");
let ibanToSend = document.querySelector("#iban");
let submitButton = document.querySelector("#submit");
let amount = document.querySelector("#amount");
let menu = document.querySelector("#menu");
let time = document.querySelector("#timer");

function timer(duration,timeLabel){
    let time = duration, minutes, seconds;
    setInterval(()=>{
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time% 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        console.log(minutes)
        timeLabel.innerText = minutes + ":" + seconds;

        if (--time < 0) {
            location.reload();
        }
    }, 1000);
}
timer(2*60,time);
//select tagine option ekler
let createOption = (id,iban,balance) => {
    let option = `<option id="${id}" value="${balance}">TR${iban} - Bakiye: ${balance}</option>`
    return option;
};
//Hesapların eklenmesini sağlar
accountList.forEach((item)=>{
    accounts.innerHTML += createOption(item.id,item.iban,item.balance);
})
//Şifrenin doğru olup olmadığını ve kaç kere girilmiş olduğunu kontrol eder.
let passwordControl =(counter)=>{
    password = prompt("Gönderilen şifreyi giriniz.");
    if(password=="1234"){
        alert("İşlem Başarılı.");
        return;
    }
    if(counter>2){
        alert("Hesap Bloke oldu.");
        return;
    }
    counter++;
    alert("Yanlış Şifre Girdiniz");
    passwordControl(counter);
}

//Butonu görünür yapmak için gerekli kontrolü yaparlar
ibanToSend.onkeypress = function(){menu.checkValidity()? submitButton.disabled=false:submitButton.disabled=true;};
accounts.addEventListener("change",()=>{menu.checkValidity()? submitButton.disabled=false:submitButton.disabled=true;});

//Gönder işleminde yapılacakları tutar.
submitButton.addEventListener("click", ()=>{
    let selectedIban =accounts.options[accounts.selectedIndex];
    let counter = 1;
    if(parseFloat(selectedIban.value)>parseFloat(amount.value) && amount.value<500){
        alert("İşlem başarılı"); 
        return;
    }else if(parseFloat(selectedIban.value)>parseFloat(amount.value)){
        passwordControl(counter); 
        return;
    }
    alert("Bakiyeniz yetersiz ya da gönderilecek miktarı girmediniz.")
    }
)