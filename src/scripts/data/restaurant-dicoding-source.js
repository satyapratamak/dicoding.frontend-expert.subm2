import API_ENDPOINT from '../globals/api-endpoint';

// eslint-disable-next-line require-jsdoc
class RestaurantDicodingSource {
  // eslint-disable-next-line require-jsdoc
  static async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // eslint-disable-next-line require-jsdoc
  static async detailsRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL);
    return response.json();
  }
}

export default RestaurantDicodingSource;
