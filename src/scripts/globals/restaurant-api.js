import CONFIG from './api-endpoint';

const RestaurantAPI = {
  optionGet: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },

  async getAll() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`, this.optionGet);
      if (response.ok) {
        return response.json;
      }
      throw new Error('Data Fetching Error');
    } catch (error) {
      return error;
    }
  },


};

export default RestaurantAPI;
