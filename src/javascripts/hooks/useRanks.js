import axios from 'axios'
let ranks = []

export function getRanks() {
  axios.get('https://valorant-api.com/v1/competitivetiers')
  .then(function (response) {
    ranks = response?.data?.data[3].tiers
    for (let rank of ranks) {
      if (rank.tier > 2) {
        let cell = document.createElement('div')
        cell.innerHTML = `
          <div class='text-decoration-none'>
            <div class='border p-2 d-flex justify-content-between align-items-center'>
              <h1 class='text-light'>${rank.tierName}</h1>
              <img class='img-fluid' src=${rank.smallIcon} alt='agent'/>
            </div>
          </div>
        `
          document.querySelector('#rankList').appendChild(cell)
        }
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}