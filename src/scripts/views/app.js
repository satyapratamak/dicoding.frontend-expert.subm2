import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

// eslint-disable-next-line require-jsdoc
class App {
  // eslint-disable-next-line require-jsdoc
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // eslint-disable-next-line require-jsdoc
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });


    // kita bisa menginisiasikan komponen lain bila ada
  }

  // eslint-disable-next-line require-jsdoc
  async renderPage() {
    const url = UrlParser.withCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.onMounted();
    await page.onAfterMounted();

    const skipElem = document.querySelector('.skip-link');
    skipElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
};


export default App;
