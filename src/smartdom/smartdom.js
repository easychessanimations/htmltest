export class SmartdomElement_{
    constructor(props){
        this.props = props

        this.e = document.createElement(this.props.tagName)
    }

    addStyle(name, value){
        this.e.style[name] = value

        return this
    }

    w(x){this.addStyle("width", x)}
    h(x){this.addStyle("height", x)}
    bc(x){this.addStyle("backgroundColor", x)}
}

export class div_ extends SmartdomElement_{
    constructor(){
        super({tagName: "div"})
    }
}

export function div(){return new div_()}