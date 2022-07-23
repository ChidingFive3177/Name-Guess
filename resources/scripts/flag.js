

function getFlag(countryCode){

    let obj = {
        flag: "",
        countryName: ""
    }

    return fetch('https://restcountries.com/v3.1/alpha?codes=' + countryCode)
    .then(response => response.json())
    .then(data => {obj.flag = data[0].flags.svg; obj.countryName = data[0].name.common})
    .then(data => {return obj})
    
  }

export default getFlag;