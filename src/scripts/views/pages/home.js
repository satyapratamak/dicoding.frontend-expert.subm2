/* eslint-disable max-len */
import restaurantDicodingSource from '../../data/restaurant-dicoding-source';
import {createTemplateHomeRestaurant} from '../templates/restaurant-template-creator';
//import RestaurantsAPI from '../../globals/restaurant-api';


const Home = {
  async render() {
    return `<section class="welcome" id="about">
        <h1 class="heading">WELCOME TO GRILLI</h1>
        <div style="text-align:center">
            <h3 class="sub-heading">~ All Luxury and Quality Restaurant ~</h3>
        </div>
        
        <div class="box-container" id="restaurant">                
        </div>
    </section>`;
  },

  async afterRender() {
    const homeRestaurants = await restaurantDicodingSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');

    homeRestaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createTemplateHomeRestaurant(restaurant);
    });
  },
};

export default Home;
