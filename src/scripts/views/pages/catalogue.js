import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoCatalogue = {
  async render() {
    return `
        <section class="content">
            <div class="katalog">
                <h2 class="judul_katalog" tabindex="0">Restaurant Catalog</h2>
                <div class="restaurantList"></div>
            </div>
        </section>
        `;
  },

  // <div class="sk-chase">
  //         <div class="sk-chase-dot"></div>
  //         <div class="sk-chase-dot"></div>
  //         <div class="sk-chase-dot"></div>
  //         <div class="sk-chase-dot"></div>
  //         <div class="sk-chase-dot"></div>
  //         <div class="sk-chase-dot"></div>
  //       </div>

  async afterRender() {
    const restos = await RestaurantApiSource.restoCatalogue();
    // console.log(restos);
    const restoContainer = document.querySelector('.restaurantList');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestoCatalogue;
