import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async bestRestaurants() {
    const response = await this.allRestaurants();
    const filter = await response.filter((resto) => resto.rating >= 4.8);
    return filter;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviews(review) {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': CONFIG.CONTENT_TYPE,
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, option);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
