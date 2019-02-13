import '../css/estilos.css';
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './messages.js';
import platziImg from '../images/platzi.png';

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platzi);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
console.log("hello from webpack.config")