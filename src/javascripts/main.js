// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'
import { getAgents } from './hooks/useAgents'
import { getMaps } from './hooks/useMaps'
import { getRanks } from './hooks/useRanks'
import { getWeapons } from './hooks/useWeapons'

if (document.querySelector('#agents')) {
  window.onload = getAgents
}

if (document.querySelector('#weapons')) {
  window.onload = getWeapons
}

if (document.querySelector('#ranks')) {
  window.onload = getRanks
}

if (document.querySelector('#maps')) {
  window.onload = getMaps
}