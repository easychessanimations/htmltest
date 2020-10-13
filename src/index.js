import _ from 'lodash'
import './style.css'
import './favicon.ico'
import { div, table, tr, td } from './smartdom/smartdom.js'

let app = div().por().pad(20).w(400).h(400).bc("#ffa").c("#007").html("Smartdom demo !")
    .fwb().fs(20).fsti().tdecu().bdr("solid").bdrw(10).bdrc("#070").bdrs("dashed")
    .boxs("10px 10px 5px #007").mar(20).ovfys()
    .a(div().w(180).h(100).bc("#afa").poa().t(100).l(20).pad(10).a(
        table().sa("cellpadding", 3).sa("cellspacing", 3).sa("border", 1).a(
            tr().a(
                td().html("a"),
                td().html("b")
            ),
            tr().a(
                td().html("x"),
                td().html("y")
            )
        )
    ))

document.body.appendChild(app.e)