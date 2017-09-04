import _ from 'lodash';
import './style.css';
import Max from './max.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  element.classList.add('hello');

 // Add the image to our existing div.
  var max = new Image();
  max.src = Max;
  max.style.height = '300px';
  max.style.width = '300px';

  element.appendChild(max);


  return element;
}

document.getElementById("main").appendChild(component());


if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }
