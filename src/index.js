import _ from 'lodash'
import './style.css'
import './favicon.ico'
import { div } from './smartdom/smartdom.js'

let app = div().pad(20).w(400).h(400).bc("#ffa").c("#007").html("Smartdom demo")
    .fwb().fs(20).fsti().tdecu()

document.body.appendChild(app.e)