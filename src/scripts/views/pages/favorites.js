import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/resto-cards';

const Favorites = {
  async render() {
    return `
      <div class="favorite__content">
        <div class="favorite__content__list">
          <div class="favorite__content__list__title">
            <h2>Restoran Favorit Anda</h2>
          </div>
          <div id="blank-list" class="favorite__content__list__blank">
              Anda belum menambahkan restoran favorit
          </div>
          <resto-cards></resto-cards>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const favoritRestaurants = await FavoriteRestaurantIdb.getAllResto();
    const favoritRestaurantsContainer = document.querySelector('resto-cards');
    const blankList = document.querySelector('#blank-list');

    favoritRestaurants.forEach((restaurant) => {
      favoritRestaurantsContainer.restaurant = restaurant;
    });

    if (favoritRestaurants.length >= 1) {
      blankList.style.display = 'none';
    }
  },
};

export default Favorites;
