
import Age from "./age.js";
import Gender from "./gender.js"
import Nationality from "./nationality.js";
import Flag from "./flag.js";


let names = [];
const countriesUl = document.querySelector('#Countries');
const guessedNames = document.querySelector('#guessed-names');
const error = document.querySelector('#error');

document.getElementById('reset').addEventListener('click', function(){
    localStorage.removeItem("names");
    names = [];
    guessedNames.innerHTML = '';
});

document.getElementById('submitBtn').addEventListener('click', function(){
    getName();
});

window.onload = () => {
    let savedNames = JSON.parse(localStorage.getItem("names"));
    if(savedNames){
        for (let i = 0 ; i < savedNames.length ; ++i) {
            names.push(savedNames[i]);
            addSelection(savedNames[i]);
        }
    }
}


function getName(){


    const name = document.getElementById('name').value;

    const male = "Male.svg";
    const female = "Female.svg";

    
    let userGender = document.getElementById("Gender");
    let userAge = document.getElementById("Age");
    let userCountries = document.getElementById("Countries");

    if(!names.includes(name)){

        error.innerText = "";

        if(/\s/.test(name) != true){

            names.push(name)

            localStorage.setItem("names", JSON.stringify(names));
    
            Age(name)
            .then(data => userAge.innerText = data);
        
            Gender(name)
            .then(data => (data == "male") ? userGender.src = "resources/images/" + male : userGender.src = "resources/images/" + female);
    
            Nationality(name)
            .then(data => { countriesUl.innerHTML = ''; data.forEach(element => {
                Flag(element).then(data => {
    
                    let li = document.createElement('li');
                    let img = document.createElement('img');
                    let h2 = document.createElement('h2');

    
                    img.setAttribute('src', data.flag);
                    img.setAttribute('id', data.countryName + '-flag');
                    img.setAttribute('alt', data.countryName + ' flag');
                    img.setAttribute('class', 'flag');
    
                    h2.value = data.countryName;
    
                    li.append(img);
                    li.append(h2.value);
    
                    userCountries.append(li);
    
                });
    
    
            })});

            document.querySelector('.gender-section').style.display = "flex";
            document.querySelector('.age-section').style.display = "flex";
            document.querySelector('.countries-section').style.display = "flex";


            addSelection(name);

    
    
        } else{
    
            error.innerText = "Name mustn't contain any spaces";
    
        } 

    } else{
        
        error.innerText = "Name already guessed!";

    }


}



function addSelection(name){
    let li = document.createElement('li');

    li.append(name);
    guessedNames.append(li);
}



console.log("names")