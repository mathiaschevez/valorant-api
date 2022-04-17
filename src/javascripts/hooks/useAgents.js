import axios from 'axios'
let agents = []

export function getAgents() {
  axios.get('https://valorant-api.com/v1/agents', {params : {isPlayableCharacter: true}})
  .then(function (response) {
    agents = response?.data?.data
    for (let agent of agents) {
      let cell = document.createElement('div')
      cell.innerHTML = `
        <a href="/" class='text-decoration-none'>
          <div class='border'>
            <img class='img-fluid' src=${agent.fullPortraitV2} alt='agent'/>
            <h1 class='text-light text-center'>${agent.displayName}</h1>
          </div>
        </a>
      `
      document.querySelector('#agentList').appendChild(cell)
    }
  })
  .catch(function (error) {
    console.log(error)
  })
}