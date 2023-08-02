/* eslint-disable max-len */
import FavoriteResto from '../../globals/favorite-resto';
import Base from '../../globals/base-data';
import itemList from '../components/templates/item-list-template';
import '../components/main-element';

const Favorite = {
  async onMounted() {
    return `
        <section class="welcome" id="about">
          <h1 class="heading">WELCOME TO GRILLI</h1>
          <div style="text-align:center">
              <h3 class="sub-heading">~ Favorite Luxury and Quality Restaurant ~</h3>
          </div>  
               
        </section>
        <main-element main-title="Restoran Favorit :"></main-element>
        `;
  },
  async onAfterMounted() {
    const restos = document.querySelector('.restoList');
    const restaurants = await FavoriteResto.getAllRestos();
    if (restaurants.length) {
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
    } else {
      restos.style.display = 'block';
      restos.innerHTML = `<h2 class="noData">No Data!</h2>`;
    }
  },
};
export default Favorite;


