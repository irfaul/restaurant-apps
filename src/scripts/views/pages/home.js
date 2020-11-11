import RestaurantSource from '../../data/restaurant-source';
import { createSkeletonRestoTemplate } from '../templates/template-creator';

import '../components/resto-cards';
import '../components/hero-item';

const Home = {
  async render() {
    return `
      <div class="content">
          <hero-item></hero-item>
          <div class="resto__list">
              <div class="resto__list__best">
                    <div class="resto__list__best__title">
                      <h2>Restoran Populer</h2>
                      <p>Coba sajian terbaik dari resto favorit</p>
                    </div>
                    <resto-cards id="popular-resto">
                      ${createSkeletonRestoTemplate(3)}
                    </resto-cards>
              </div>
              <div class="resto__list__all">
                    <div class="resto__list__all__title">
                        <h2>Semua Restoran</h2>
                        <p>Temukan resto favorit disekitar anda</p>
                    </div>
                    <resto-cards id="all-resto">
                      ${createSkeletonRestoTemplate(20)}
                    </resto-cards>
              </div>
          </div>
      </div>
      `;
  },

  async afterRender() {
    // eslint-disable-next-line no-use-before-define
    await renderHomeContent.bestRestaurant();
    // eslint-disable-next-line no-use-before-define
    await renderHomeContent.allRestaurant();
  },
};

const renderHomeContent = {
  async bestRestaurant() {
    const bestRestaurants = await RestaurantSource.bestRestaurants();
    const bestRestaurantsContainer = document.querySelector('#popular-resto');
    bestRestaurantsContainer.innerHTML = '';

    bestRestaurants.forEach((restaurant) => {
      bestRestaurantsContainer.restaurant = restaurant;
    });
  },

  async allRestaurant() {
    const allRestaurants = await RestaurantSource.allRestaurants();
    const allRestaurantsContainer = document.querySelector('#all-resto');
    allRestaurantsContainer.innerHTML = '';

    allRestaurants.forEach((restaurant) => {
      allRestaurantsContainer.restaurant = restaurant;
    });
  },
};

export default Home;
