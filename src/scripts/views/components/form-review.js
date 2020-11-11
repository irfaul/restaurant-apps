class FormReview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="form__item">
                <div class="form__item__group">
                    <label for="inputUserName">Nama</label>
                    <input id="inputUserName" type="text" placeholder="Masukkan Nama">
                </div>
                <div class="form__item__group">
                    <label for="inputReview">Review</label>
                    <textarea id="inputReview" rows="5" placeholder="Tambahkan review restoran disini"></textarea>
                </div>
                <div class="form__item__group">
                    <button type="button" id="buttonAdd">Tambah review</button>
                </div>
            </div>
            `;
  }
}

customElements.define('form-review', FormReview);
