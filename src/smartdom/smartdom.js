export class SmartdomElement_{
    constructor(props){
        this.props = props

        this.e = document.createElement(this.props.tagName)
    }

    a(child){
        this.e.appendChild(child.e)
        return this
    }

    addStyle(name, value){
        this.e.style[name] = value

        return this
    }

    w(x){return this.addStyle("width", x + "px")}
    h(x){return this.addStyle("height", x + "px")}
    t(x){return this.addStyle("top", x + "px")}
    l(x){return this.addStyle("left", x + "px")}
    c(x){return this.addStyle("color", x)}
    ovf(x){return this.addStyle("overflow", x)}
    ovfs(){return this.ovf("scroll")}
    ovfx(x){return this.addStyle("overflowX", x)}
    ovfxs(){return this.ovfx("scroll")}
    ovfy(x){return this.addStyle("overflowY", x)}
    ovfys(){return this.ovfy("scroll")}
    bdr(x){return this.addStyle("border", x)}
    bdrw(x){return this.addStyle("borderWidth", x + "px")}
    bdrc(x){return this.addStyle("borderColor", x)}
    bdrs(x){return this.addStyle("borderStyle", x)}
    boxs(x){return this.addStyle("boxShadow", x)}
    fw(x){return this.addStyle("fontWeight", x)}
    fwb(){return this.fw("bold")}
    fs(x){return this.addStyle("fontSize", x + "px")}
    fst(x){return this.addStyle("fontStyle", x)}
    fsti(){return this.fst("italic")}
    tdec(x){return this.addStyle("textDecoration", x)}    
    tdecu(){return this.tdec("underline")}
    bc(x){return this.addStyle("backgroundColor", x)}
    pad(x){return this.addStyle("padding", x + "px")}
    mar(x){return this.addStyle("margin", x + "px")}
    pos(x){return this.addStyle("position", x)}
    por(){return this.pos("relative")}
    poa(){return this.pos("absolute")}
    html(x){this.e.innerHTML = x;return this}
}

export class div_ extends SmartdomElement_{
    constructor(){
        super({tagName: "div"})
    }
}

export function div(){return new div_()}