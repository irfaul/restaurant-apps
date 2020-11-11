/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestoCards extends HTMLElement {
  /**
     * @param {any} restaurant
     */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  renderError(error) {
    this.innerHTML += `<h2>${error}</h2>`;
  }

  render() {
    this.innerHTML
            += `
            <div class="card__item">
                <div class="card__item__header">
                    <img data-src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" class="card__item__header__image lazyload" crossorigin="anonymous">
                    <div class="card__item__header__icon__location">
                        <i class="material-icons">place</i>${this._restaurant.city}
                    </div>
                    <div class="card__item__header__icon__rating">
                        <i class="material-icons">grade</i>${this._restaurant.rating}
                    </div>
                </div>
                <div class="card__item__content">
                    <h3>${this._restaurant.name}</h3>
                    <p>${this._restaurant.description}</p>
                    
                </div>
                <div class="card__item__link">
                    <a href="${`/#/detail/${this._restaurant.id}`}">View Detail</a>
                </div>
            </div>
            `;
  }
}

customElements.define('resto-cards', RestoCards);
