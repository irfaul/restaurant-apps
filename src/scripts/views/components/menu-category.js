/* eslint-disable no-underscore-dangle */
class MenuCategory extends HTMLElement {
  /**
       * @param {any} menu
       */
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML
              += `
              <div class="category__item">
                  <div class="category__item__icon">
                      <i class="material-icons">menu_book</i>
                  </div>
                  <p class="category__item__name">${this._menu.name}</p>
              </div>
              `;
  }
}

customElements.define('menu-category', MenuCategory);
