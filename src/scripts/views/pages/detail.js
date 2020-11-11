/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

import '../components/detail-header';
import '../components/food-menu';
import '../components/drink-menu';
import '../components/consumer-review';
import '../components/form-review';
import '../components/menu-category';

const Detail = {
  async render() {
    return `
        <div class="detail-content">
          <detail-header></detail-header>
          <div class="category__list">
              <div class="category__list__title">
                  <h2>Kategori Menu</h2>
              </div>
              <menu-category></menu-category>
          </div>
          <div class="food__list">
              <div class="food__list__title">
                  <h2>Makanan</h2>
              </div>
              <food-menu></food-menu>
          </div>
          <div class="drink__list">
              <div class="drink__list__title">
                  <h2>Minuman</h2>
              </div>
              <drink-menu></drink-menu>
          </div>
          <div class="consumer__review__list">
              <div class="consumer__review__list__title">
                  <h2>Review Pengunjung</h2>
              </div>
              <consumer-review></consumer-review>
          </div>
          <div class="form__review">
              <div class="form__review__title">
                  <h2>Tambahkan Review</h2>
              </div>
              <form-review></form-review>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    RenderDetailContent.init(UrlParser.parseActiveUrlWithoutCombiner());
  },
};

const RenderDetailContent = {
  async init(url) {
    this._url = url.id;
    this._restaurant = await RestaurantSource.detailRestaurants(this._url);

    this._detailHeader();
    this._categoryMenu();
    this._foodMenu();
    this._drinkMenu();
    this._consumerReview();
    this._formReview();
    this._initialLikeButton();
  },

  _detailHeader() {
    const detailHeader = document.querySelector('detail-header');
    detailHeader.restaurant = this._restaurant;
  },

  _categoryMenu() {
    const categoryMenu = document.querySelector('menu-category');
    this._restaurant.categories.forEach((menu) => {
      categoryMenu.menu = menu;
    });
  },

  _foodMenu() {
    const foodMenu = document.querySelector('food-menu');
    this._restaurant.menus.foods.forEach((food) => {
      foodMenu.food = food;
    });
  },

  _drinkMenu() {
    const drinkMenu = document.querySelector('drink-menu');
    this._restaurant.menus.drinks.forEach((drink) => {
      drinkMenu.drink = drink;
    });
  },

  _consumerReview() {
    const consumerReview = document.querySelector('consumer-review');
    this._restaurant.customerReviews.forEach((review) => {
      consumerReview.review = review;
    });
  },

  _formReview() {
    const buttonAdd = document.querySelector('#buttonAdd');
    buttonAdd.addEventListener('click', async () => {
      const inputUserName = document.querySelector('#inputUserName');
      const inputReview = document.querySelector('#inputReview');
      const reviews = {
        id: this._url,
        name: inputUserName.value,
        review: inputReview.value,
      };
      await RestaurantSource.addReviews(reviews);
      window.location.reload();
    });
  },

  _initialLikeButton() {
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      resto: {
        id: this._restaurant.id,
        name: this._restaurant.name,
        description: this._restaurant.description,
        rating: this._restaurant.rating,
        city: this._restaurant.city,
        pictureId: this._restaurant.pictureId,
      },
    });
  },
};

export default Detail;
