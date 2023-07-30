import UrlParser from '../../routes/url-parser';
import restaurantDicodingSource from '../../data/restaurant-dicoding-source';

const Details = {
  async render() {
    return `
        <h2> DETAILS </h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // eslint-disable-next-line max-len
    const detailRestaurant = await restaurantDicodingSource.detailsRestaurant(url.id);
    console.log(detailRestaurant);
  },
};

export default Details;
