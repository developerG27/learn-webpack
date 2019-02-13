function component(){
  let element = document.createElement('div');

  element.inneerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());