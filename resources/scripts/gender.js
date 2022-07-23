
function getGender(name){

    return fetch('https://api.genderize.io/?name=' + name)
    .then(response => response.json())
    .then(data => {return data.gender})
    
}

export default getGender;