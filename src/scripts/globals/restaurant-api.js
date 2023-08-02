import Base from './base-data';

const RestaurantAPI = {
  optionGet: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
  async getAll() {
    try {
      const response = await fetch(`${Base.API_URL}/list`, this.optionGet);
      if (response.ok) {
        return response.json();
      }
      throw new Error('Fetch all error.');
    } catch (error) {
      return error;
    }
  },

  async getById(id) {
    try {
      const response = await fetch(`${Base.API_URL}/detail/${id}`, {
        cache: 'reload',
      });
      if (response.ok) {
        return response.json();
      }
      throw new Error('Fetch restaurant By ID Error.');
    } catch (error) {
      return error;
    }
  },

  async postReview({id, name, review}) {
    try {
      const response = await fetch(`${Base.API_URL}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          review,
        }),
      });
      if (response.ok) {
        return response;
      }
      throw new Error('No data');
    } catch (error) {
      return error;
    }
  },


};

export default RestaurantAPI;
