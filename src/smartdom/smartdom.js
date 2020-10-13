export class SmartdomElement_{
    constructor(props){
        this.props = props

        this.e = document.createElement(this.props.tagName)
    }

    addStyle(name, value){
        this.e.style[name] = value

        return this
    }

    w(x){return this.addStyle("width", x + "px")}
    h(x){return this.addStyle("height", x + "px")}
    c(x){return this.addStyle("color", x)}
    fw(x){return this.addStyle("fontWeight", x)}
    fwb(){return this.fw("bold")}
    fs(x){return this.addStyle("fontSize", x + "px")}
    fst(x){return this.addStyle("fontStyle", x)}
    fsti(){return this.fst("italic")}
    bc(x){return this.addStyle("backgroundColor", x)}
    pad(x){return this.addStyle("padding", x + "px")}
    html(x){this.e.innerHTML = x;return this}
}

export class div_ extends SmartdomElement_{
    constructor(){
        super({tagName: "div"})
    }
}

export function div(){return new div_()}