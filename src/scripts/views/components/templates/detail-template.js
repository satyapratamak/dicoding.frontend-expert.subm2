/* eslint-disable max-len */
import '../no-network-element';
const detailElement = ({Base, restaurant}) => {
  if (restaurant) {
    return `
    <div class="detailImg">
      <img src="${Base.API_URL}${Base.IMG_PATH}${restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="detailContent">
      <h3>${restaurant.name}</h3>
      <p class="addressAndCity">${restaurant.address} - ${restaurant.city}</p>
      <p class="desc">${restaurant.description}</p>
      <ul class="categories"></ul>
    </div>
    `;
  }
  return `
  <no-network message="Anda tidak tersambung ke jaringan!"></no-network>
  `;
};
export default detailElement;
