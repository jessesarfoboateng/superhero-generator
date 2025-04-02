const image = document.getElementById('imagediv')
  const superHeroName = document.getElementById('superHeroName')      
  const power = document.getElementById('power')
  const superheroSearch = document.getElementById('superHeroQuery')


  const searchSuperhero = () => {
    let superHeroIdentity = superheroSearch.value
    fetch(`https://superheroapi.com/api.php/10223569763528853/search/${superHeroIdentity}`) 
      .then(response => response.json())
      .then(json => {
        console.log(json)
        image.innerHTML = `<img src="${json.results[0].image.url}" width=300 height=300/>`
        superHeroName.innerHTML = `${json.results[1].name}`
  
        power.innerHTML = `Power: ${json.results[0].powerstats.strength}`
      } )
  }


  const generateSuperHero = () => {
    let superHeroNumber = Math.floor(Math.random() * 400 + 1)

  fetch(`https://superheroapi.com/api.php/10223569763528853/${superHeroNumber}`) 
    .then(response => response.json())
    .then(json => {
      console.log(json)
      image.innerHTML = `<img src="${json.image.url}" width=300 height=300/>`
      superHeroName.innerHTML = `${json.name}`
      //power.innerHTML = `Power: ${powerstats.strength}`
    } )
  } 