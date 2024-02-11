const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";


const numbers = "0123456789";

const symbols = "!@#$%^&*()_+=";

let all = upperCase + lowerCase + numbers + symbols;


function createPassword(){
    
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];




    while(length > password.length){

    password += all[Math.floor(Math.random() * all.length)];

    }

    passwordBox.value = password;


}

let btn = document.querySelector("button");

btn.addEventListener("click",  createPassword);



function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}


let copyBtn = document.querySelector("img");

copyBtn.addEventListener("click", copyPassword);
