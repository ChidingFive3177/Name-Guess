
  function getNationality(name){

    let arr = [];

    return fetch('https://api.nationalize.io/?name=' + name)
    .then(response => response.json())
    .then(data =>  data.country.forEach(element => {arr.push(element.country_id);}))
    .then(array => {return arr});

  }

  export default getNationality;