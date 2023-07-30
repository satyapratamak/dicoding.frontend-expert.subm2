import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';


// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigationdrawer'),
  content: document.querySelector('#mainContaintRestaurant'),
});

window.addEventListener('load', () => {
  app.renderPage();
});
