const { dep } = require('./moduledependency.js')

function intro(){
    return "intro" + " " + dep
}

module.exports = {
    intro: intro
}
