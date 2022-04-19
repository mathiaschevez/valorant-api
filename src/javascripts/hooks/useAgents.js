import axios from 'axios'
let agents = []

export function getAgents() {
  axios.get('https://valorant-api.com/v1/agents', {params : {isPlayableCharacter: true}})
  .then(function (response) {
    agents = response?.data?.data
    for (let agent of agents) {
      let cell = document.createElement('div')
      cell.innerHTML = `
        <div class='text-decoration-none'>
          <div class='border my-3 '>
            <img class='img-fluid' src=${agent.fullPortraitV2} alt='agent'/>
            <h1 class='text-light text-center'>${agent.displayName}</h1>
          </div>
        </div>
      `
      document.querySelector('#agentList').appendChild(cell)
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}