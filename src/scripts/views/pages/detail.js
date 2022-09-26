import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
            <h2 class="judul_page" tabindex="0">Restaurant Detail</h2>
            <div class="restaurantDetail"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithhoutCombiner();
    const resto = await RestaurantApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('.restaurantDetail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
  },
};

export default Detail;
