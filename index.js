// Import stylesheets
import './style.css';

import { add } from './calculator.js';

const result = add(3, 4);

console.log(result);


// Write Javascript code in window!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${result}</h1>`;