import menusEl from './templates/menus-template';

// eslint-disable-next-line require-jsdoc
class Menus {
  // eslint-disable-next-line require-jsdoc
  constructor({foods, drinks, data}) {
    this._foods = foods;
    this._drinks = drinks;
    this._data = data;
  }

  // eslint-disable-next-line require-jsdoc
  static container(el) {
    document.querySelector(`${el}`).innerHTML = menusEl();
  }

  // eslint-disable-next-line require-jsdoc
  foods() {
    this._data.menus.foods.forEach((item) => {
      this._foods.innerHTML += `<li>${item.name}</li>`;
    });
  }

  // eslint-disable-next-line require-jsdoc
  drinks() {
    this._data.menus.drinks.forEach((item) => {
      this._drinks.innerHTML += `<li>${item.name}</li>`;
    });
  }

  // eslint-disable-next-line require-jsdoc
  init() {
    this.foods();
    this.drinks();
  }
}

export default Menus;
