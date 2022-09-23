import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h2 class="resto__title">${resto.name}</h2>
    <img class="resto__pict" src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" alt="${resto.name} />
    <div class="resto__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${resto.address}, ${resto.city}</p>
        <h4>Description</h4>
        <p>${resto.description}</p>
        <h4>Rating</h4>
        <p>${resto.rating}</p>
    </div>
    <div class="resto__menu">
        <h3>Menu</h3>
        <h4>Foods</h4>
        <p>${resto.menus.foods.map((food) => '<br>' + food.name).join('')}</p><br>
        <h4>Drinks</h4>
        <p>${resto.menus.drinks.map((drink) => '<br>' + drink.name).join('')}</p><br>
    </div>
    <div class="resto__review">
    <h3>Customer Reviews</h3>
    <p>Customer: ${resto.customerReviews[0].name}</p>
    <p>Review: ${resto.customerReviews[0].review}</p>
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="resto-item">
        <img class="resto-item__pict" src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" alt="${resto.name}" tabindex="0">
        <div class="resto-item__content">
            <h3 class="resto-item__name" tabindex="0"><b><a href="/#/detail/${resto.id}">${resto.name}</a></b></h3>
            <p class="resto-item__location" tabindex="0"><b>Location</b>: ${resto.city}</p>
            <p class="resto-item__rating" tabindex="0"><b>Rating</b>: ${resto.rating}/5</p>
            <p class="resto-item__desc" tabindex="0"><b>Description</b>: <br>${resto.description}</p>
        </div>
    </div>
`;

export { createRestoDetailTemplate, createRestoItemTemplate };
