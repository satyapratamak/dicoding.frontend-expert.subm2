import urlParser from '../../routes/url-parser';
// import Restaurants from '../global/api';
import Restaurants from '../../globals/api';
// import restaurantDicodingSource from '../../data/restaurant-dicoding-source';
import content from '../components/content-element';
import LikeButton from '../components/like-button';
import Reviews from '../components/reviews-element';
import Menus from '../components/menus-element';


const Detail = {
  async onMounted() {
    return `
    <div class="container">
      <main class="detailContainer">
        <div class="detail" id="main" tabindex="0"></div>
        <div class="menus"></div>
      </main>
      <div class="reviewStuff">
        <div id="reviews"></div>
      </div>
    </div>
    `;
  },
  async onAfterMounted() {
    const url = urlParser.withoutCombiner();

    const {restaurant} = await Restaurants.getById(url.id);
    console.log(restaurant);
    // Content
    content({
      element: document.querySelector('.detail'),
      data: restaurant,
    });

    // Menus Element foods and drinks
    Menus.container('.menus');
    const Menu = new Menus({
      foods: document.querySelector('.menus .foods ul'),
      drinks: document.querySelector('.menus .drinks ul'),
      data: restaurant,
    });
    Menu.init();

    // Like button
    LikeButton.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      resto: {...restaurant},
    });

    // Reviews Element
    const reviews = new Reviews({
      reviewsContainer: document.querySelector('.reviewStuff'),
      dataId: url.id,
    });
    reviews.addReview();
    reviews.list();
    reviews.submitReview();
  },
};
export default Detail;
