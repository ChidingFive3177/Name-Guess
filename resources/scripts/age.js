
function getAge(name){

  return fetch('https://api.agify.io?name=' + name)
  .then(response => response.json())
  .then(data => {return data.age})
  
}

export default getAge;