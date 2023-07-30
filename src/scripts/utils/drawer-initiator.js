// eslint-disable-next-line no-unused-vars
const DrawerInitiator = {
  init({button, drawer, content}) {
    button.addEventListener('click', (event) => {
      button.classList.toggle('fa-times');
      // drawer.classList.toggle('active');
      this._toogleDrawer(event, drawer);
    });

    // content.addEventListener('click', (event) =>{
    //   this._closeDrawer(event, drawer);
    // });
  },

  _toogleDrawer(event, drawer) {
    event.stopPropagation();
    // drawer.classList.toogle('active');
    drawer.classList.toggle('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;
