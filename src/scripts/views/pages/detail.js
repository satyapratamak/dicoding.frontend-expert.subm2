import urlParser from '../../routes/url-parser';
// import Restaurants from '../global/api';
import Restaurant from '../../globals/api';
import restaurantDicodingSource from '../../data/restaurant-dicoding-source';
import Content from '../components/content-element';
import LikeButton from '../components/like-button';
import Reviews from '../components/reviews-element';



const Detail = {
  async render() {
    return `
        <h2> DETAILS </h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = urlParser.parseActiveUrlWithoutCombiner();
    // eslint-disable-next-line max-len
    const detailRestaurant = await restaurantDicodingSource.detailsRestaurant(url.id);
    console.log(detailRestaurant);
  },
};

export default Detail;
