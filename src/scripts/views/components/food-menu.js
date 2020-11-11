/* eslint-disable no-underscore-dangle */
class FoodMenu extends HTMLElement {
  /**
     * @param {any} food
     */
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML
            += `
            <div class="menu__item">
                <div class="menu__item__icon">
                    <i class="material-icons">restaurant_menu</i>
                </div>
                <p class="menu__item__name">${this._food.name}</p>
            </div>
            `;
  }
}

customElements.define('food-menu', FoodMenu);
