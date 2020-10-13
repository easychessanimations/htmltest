import _ from 'lodash';
import './style.css';
import intro from './mymodule.js'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'remote', 'build', 'config', intro()], ' ');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
index.html