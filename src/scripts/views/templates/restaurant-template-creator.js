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
        <a href="#" class="btn">Read More</a>
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


export {createTemplateHomeRestaurant, createTemplateFavoriteRestaurant};
