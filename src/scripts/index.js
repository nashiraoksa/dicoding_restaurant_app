import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { restaurants } from '../DATA.json';
import App from './views/app';

const restaurantListElement = document.querySelector('.restaurantList');
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

const app = new App({
  // button: document.querySelector('#menu'),
  // drawer: document.querySelector('#drawer'),
  // content: document.querySelector('main'),
  button: menu,
  drawer: drawer,
  content: main,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

restaurants.forEach((resto) => {
  const name = resto.name;
  const pict = resto.pictureId;
  const label = resto.pictureDesc;
  const description = resto.description;
  const city = resto.city;
  const rating = resto.rating;

  const restoItem = document.createElement('article');
  restoItem.setAttribute('class', 'resto-item');

  restoItem.innerHTML = `
  <img class="resto-item__pict" src="${pict}" alt="${label}" tabindex="0">
  <div class="resto-item__content">
    <h3 class="resto-item__name" tabindex="0"><b>${name}</b></h3>
    <p class="resto-item__location" tabindex="0"><b>Location</b>: ${city}</p>
    <p class="resto-item__rating" tabindex="0"><b>Rating</b>: ${rating}/5</p>
    <p class="resto-item__desc" tabindex="0"><b>Description</b>: <br>${description}</p>
  </div>
  `;
  restaurantListElement.appendChild(restoItem);
});

// menu.addEventListener('click', function (event) {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// menu.addEventListener('keypress', function (event) {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', function () {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', function () {
//   drawer.classList.remove('open');
// });
