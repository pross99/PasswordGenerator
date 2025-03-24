const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pwd1El = document.getElementById("pwd1-el")
let pwd2El = document.getElementById("pwd2-el")
const checkbox= document.getElementById("symbols")
let copyPasswordText = document.querySelectorAll("#pwd1-el, #pwd2-el")
let includeSpecialCharacters = true;

checkbox.addEventListener("change", () => {
    includeSpecialCharacters = checkbox.checked;
})

copyPasswordText.forEach((element) => {
   element.addEventListener("click", function() {
    alert("Password copied to clipboard!");;
   })
})

function displayPasswords() {
    pwd1El.value=generatePassword();
    pwd2El.value=generatePassword()
}


function generatePassword() {
    
    let password = "";
    if(includeSpecialCharacters) {
         for(let i=0; i<15; i++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        password += characters[randomChar]
    }
    } else if(!includeSpecialCharacters) {
         for (let i=0; i<15; i++) {
           let randomChar = Math.floor(Math.random() * characters.length / 2)
        password += characters[randomChar]
    }
    }
   
    return password 
}




function copyPassword(id) {
    if(id === "pwd1-el") {
    console.log("HEY", pwd1El.value)
    navigator.clipboard.writeText(pwd1El.value);
    } else if(id ==="pwd2-el") {
       console.log(pwd2El.value)
    navigator.clipboard.writeText(pwd2El.value); 
    }
}