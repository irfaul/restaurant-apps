/* eslint-disable no-underscore-dangle */
class DrinkMenu extends HTMLElement {
  /**
     * @param {any} drink
     */
  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.innerHTML
            += `
            <div class="menu__item">
                <div class="menu__item__icon">
                    <i class="material-icons">local_cafe</i>
                </div>
                <p class="menu__item__name">${this._drink.name}</p>
            </div>
            `;
  }
}

customElements.define('drink-menu', DrinkMenu);
