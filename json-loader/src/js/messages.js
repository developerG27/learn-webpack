const renderToDOM = require('./render-to-dom.js');
const makeMessage = require('./make-message.js');

const waitTime = new Promise((todoOk, todoMal)=> {
  setTimeout(() => {
    todoOk('Han pasado 3 segundos, omg');
  },3000)
})

module.exports = {
  firstMessage: 'Hello world from one module',
  delayedMessage: async () => {
    let message = await waitTime;
  
    console.log(message); 
    // const element = document.createElement('p');
    // element.textContent = message;
    renderToDOM(makeMessage(message));
  },
}