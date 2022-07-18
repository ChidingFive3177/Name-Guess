

function getFlag(countryCode){

    let obj = {
        code: countryCode,
        flag: []
    }

    return fetch('https://restcountries.com/v3.1/alpha?codes=' + countryCode)
    .then(response => response.json())
    .then(data => obj.flag.push(data[0].flags))
    .then(data => {return obj})
    
  }

export default getFlag;