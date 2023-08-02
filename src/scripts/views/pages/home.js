import Restaurants from '../../globals/restaurant-api';
import Base from '../../globals/base-data';
import itemList from '../components/templates/item-list-template';
import '../components/main-element';


const Home = {
  async onMounted() {
    return `
    <section class="welcome" id="about">
        <h1 class="heading">WELCOME TO GRILLI</h1>
        <div style="text-align:center">
            <h3 class="sub-heading">~ All Luxury and Quality Restaurant ~</h3>
        </div>
               
    </section>
    <main-element main-title=""></main-element>`;
  },

  async onAfterMounted() {
    const restos = document.querySelector('.restoList');
    const {restaurants} = await Restaurants.getAll();
    restaurants.forEach((resto) => {
      const imgPath = `${Base.API_URL}${Base.IMG_PATH}${resto.pictureId}`;
      const substringDescription = `${resto.description.substring(0, 250)}...`;
      const restoEl = document.createElement('article');
      restoEl.setAttribute('class', 'resto');
      restoEl.innerHTML = itemList({
        data: resto,
        imagePath: imgPath,
        description: substringDescription,
      });
      restos.append(restoEl);
    });
  },
};

export default Home;
