import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <h2>Restaurant Detail</h2>
            <div class="restaurantDetail"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithhoutCombiner();
    const resto = await RestaurantApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('.restaurantDetail');
    console.log(resto);
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};

export default Detail;
