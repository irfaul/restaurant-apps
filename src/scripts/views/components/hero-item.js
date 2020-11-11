class HeroItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="hero__inner">
                  <h1 class="hero__inner__title">Temukan selera cita rasa nusantara</h1>
                  <p class="hero__inner__tagline">Nikmati berbagai sajian lezat khas lokal dari berbagai wilayah di Indonesia</p>
            </div>
            `;
  }
}

customElements.define('hero-item', HeroItem);
