import _ from 'lodash'
import './style.css'
import './favicon.ico'
import { div } from './smartdom/smartdom.js'

let app = div().addStyle("width", "200px").addStyle("height", "200px").addStyle("backgroundColor", "#0f0")

document.body.appendChild(app.e)