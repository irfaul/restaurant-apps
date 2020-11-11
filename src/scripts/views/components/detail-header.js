/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class DetailHeader extends HTMLElement {
  /**
     * @param {any} restaurant
     */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="resto__header">
                <div class="resto__header__image">
                    <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" crossorigin="anonymous"/>
                </div>
                <div class="resto__header__info">
                    <h1 class="resto__header__info__title">${this._restaurant.name}</h1>
                    <div class="resto__header__info__detail">
                        <div class="resto__header__info__detail__location">
                            <i class="material-icons">place</i>${this._restaurant.city}
                        </div>
                        <div class="resto__header__info__detail__rating">
                            <i class="material-icons">grade</i>${this._restaurant.rating}
                        </div>
                    </div>
                    <p class="resto__header__info__address"><b>Alamat :</b> ${this._restaurant.address}</p>
                    <p class="resto__header__info__description">${this._restaurant.description}</p>
                </div>
            </div>
            `;
  }
}

customElements.define('detail-header', DetailHeader);
