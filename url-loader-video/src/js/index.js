import '../css/estilos.css';
import { firstMessage, delayedMessage } from './messages.js';
import platziImg from '../images/platzi.png';

document.write(firstMessage)
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);
console.log("hello from webpack.config")