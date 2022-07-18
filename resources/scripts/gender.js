
function getGender(){

    return fetch('https://api.genderize.io/?name=joseph')
    .then(response => response.json())
    .then(data => {return data.gender})
    
}

export default getGender;