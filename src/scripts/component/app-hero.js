class AppHero extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <style>
          .hero {
            display: flex;
            align-items: center;
            min-height: 380px;
            width: 100%;
            text-align: center;
            background-image: url('../public/images/heros/hero-image_2.jpg');
            background-color: #b4b4b4;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-blend-mode: multiply;
          }
          
          .hero__inner {
            margin: 0 auto;
            max-width: 800px;
            padding: 40px;
          }
          
          .hero__title {
            color: #fff;
            font-weight: 500;
            font-size: 36px;
          }
          
          .hero__tagline {
            color: #fff;
            margin-top: 16px;
            font-size: 18px;
            font-weight: 500;
          }
        </style>

        <div class="hero">
            <div class="hero__inner">
                <h2 class="hero__title" tabindex="0">Looking for restaurant?</h2>
                <p class="hero__tagline" tabindex="0">Kotak Makan provides the restaurant catalog you need to find the best eatery in Indonesia.</p>
            </div>
        </div>
        `;
  }
}

customElements.define('app-hero', AppHero);
