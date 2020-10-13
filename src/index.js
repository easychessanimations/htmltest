import _ from 'lodash'
import './style.css'
import './favicon.ico'
import { div } from './smartdom/smartdom.js'

let app = div().w(400).h(400).bc("#00f")

document.body.appendChild(app.e)