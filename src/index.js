import _ from 'lodash';
// import {Name, Nijou} from './utilities';
// import * as utilities from './utilities';
import {Name as Name_obj} from './utilities';
import Lion from './utilities';
import style from './style.css';
import logo from './logo.png';

// console.log(Nijou(8));
// console.log(Name);

// console.log(utilities.Name)

console.log(Name_obj)
console.log(Lion.say())

console.log(style)

const doc = document;
function conponent () {
  console.log('create element')
  const element = doc.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

doc.body.appendChild(conponent());
doc.body.classList.add('haikei');

const image = new Image;
image.src = logo;
doc.body.appendChild(image);
