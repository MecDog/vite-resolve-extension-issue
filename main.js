import './style.css';
import foo from 'foo';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

let div = document.createElement('div');
div.textContent = `i want foo.web.js is loaded, but get ${foo()}`;

document.querySelector('#app').appendChild(div);
