import axios from 'axios'
let maps = []

export function getMaps() {
  axios.get('https://valorant-api.com/v1/maps')
  .then(function (response) {
    maps = response?.data?.data
    for (let map of maps) {
      let cell = document.createElement('div')
      cell.innerHTML = `
        <div class='text-decoration-none'>
          <div class='border p-2 d-flex justify-content-between align-items-center'>
            <h1 class='text-light'>${map.displayName}</h1>
            <img class='w-50 h-auto' src=${map.splash} alt='agent'/>
          </div>
        </div>
      `
      document.querySelector('#mapList').appendChild(cell)
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}