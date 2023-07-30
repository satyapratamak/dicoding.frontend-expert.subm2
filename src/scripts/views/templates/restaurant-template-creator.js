/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createTemplateHomeRestaurant = (restaurant) => `
<div class="box">
    <div class="image">
        <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="">
    </div>

    <div class="content">
        <h3> ${restaurant.name}</h3>
        
        <p>${restaurant.description}</p>
        <a href="/#/detail/${restaurant.id}" class="btn">Read More</a>
    </div>
</div>
`;

const createTemplateFavoriteRestaurant = (restaurant) => `
<div class="box">
    <div class="image">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="">
    </div>

    <div class="content">
        <h3> ${restaurant.name}</h3>
        
        <p>${restaurant.description}</p>
        <a href="#" class="btn">Read More</a>
    </div>
</div>
`;

const createTemplateDetailRestaurant = (restaurant) => `
<div class="box-detail-restaurant">
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
</div>
`;


export {createTemplateHomeRestaurant, createTemplateFavoriteRestaurant, createTemplateDetailRestaurant};
