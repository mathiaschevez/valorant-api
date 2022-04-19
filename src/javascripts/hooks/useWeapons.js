import axios from 'axios'
let weapons = []

export function getWeapons() {
  axios.get('https://valorant-api.com/v1/weapons')
  .then(function (response) {
    weapons = response?.data?.data
    for (let weapon of weapons) {
      let cell = document.createElement('div')
      cell.innerHTML = `
        <div class='text-decoration-none'>
          <div class='border p-2'>
            <img class='img-fluid' src=${weapon.displayIcon} alt='agent'/>
            <h1 class='text-light text-center'>${weapon.displayName}</h1>
          </div>
        </div>
      `
      document.querySelector('#weaponList').appendChild(cell)
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}