import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="resto__title" tabindex="0">${resto.name}</h2>
    <img class="resto__pict" src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" alt="${resto.name}" tabindex="0">
    <div class="resto__info">
        <h3 class="resto__subtitle" tabindex="0">Information</h3>
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${resto.address}, ${resto.city}</p>
        <h4 tabindex="0">Rating</h4>
        <p tabindex="0">⭐ ${resto.rating}/5</p>
        <h4 tabindex="0">Description</h4>
        <p tabindex="0">${resto.description}</p>
    </div>
    <div class="resto__menu">
        <h3 class="resto__subtitle" tabindex="0">Menu</h3>
        <h4 tabindex="0">Foods</h4>
        <p tabindex="0">${resto.menus.foods.map((food) => food.name + '<br>').join('')}</p>
        <h4 tabindex="0">Drinks</h4>
        <p tabindex="0">${resto.menus.drinks.map((drink) => drink.name + '<br>').join('')}</p>
    </div>
    <div class="resto__review">
    <h3 class="resto__subtitle" tabindex="0">Customer Reviews</h3>
    <div class="review__item">
    <p class="customer" tabindex="0">${resto.customerReviews[0].name}</p>
    <p class="review" tabindex="0">${resto.customerReviews[0].review}</p>
    </div>
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="resto-item">
        <a href="/#/detail/${resto.id}"><img class="resto-item__pict" src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" alt="${resto.name}" tabindex="0"></a>
        <div class="resto-item__content">
            <h3 class="resto-item__name" tabindex="0"><b><a href="/#/detail/${resto.id}">${resto.name}</a></b></h3>
            <p class="resto-item__location" tabindex="0"><b>Location</b>: ${resto.city}</p>
            <p class="resto-item__rating" tabindex="0"><b>Rating</b>: ${resto.rating}/5</p>
            <p class="resto-item__desc" tabindex="0"><b>Description</b>: <br>${resto.description}</p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestoDetailTemplate, createRestoItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
