/* eslint-disable no-underscore-dangle */
class ConsumerReview extends HTMLElement {
  /**
     * @param {any} review
     */
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML
            += `
            <div class="review__item">
                <div class="review__item__name">
                    <i class="material-icons">account_circle</i>
                    <p>${this._review.name}</p>
                </div>
                <div class="review__item__date">
                    <p>${this._review.date}</p>
                </div>
                <div class="review__item__content">
                    <p><q>${this._review.review}</q></p>
                </div>
            </div>
            `;
  }
}

customElements.define('consumer-review', ConsumerReview);
