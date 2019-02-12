import './estilos.css'
import {firstMessage, delayedMessage} from './message.js';
import platzi from './src/images/platzi.png';

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platzi);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
console.log("hello from webpack.config")