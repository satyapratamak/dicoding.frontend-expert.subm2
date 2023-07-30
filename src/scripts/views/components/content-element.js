import detailElement from './templates/detail-template';
import Base from '../../globals/base-data';

const Content = ({element, data}) => {
  const detailEl = element;
  const likeEl = document.createElement('div');
  likeEl.setAttribute('class', 'likeButtonContainer');
  const createRestoElement = detailElement({
    Base,
    restaurant: data,
  });
  detailEl.innerHTML = createRestoElement;
  detailEl.append(likeEl);
  const categories = document.querySelector('.categories');
  data.categories.forEach((item) => {
    const categoryEl = `
        <li>#${item.name}</li>
      `;
    categories.innerHTML += categoryEl;
  });
};
export default Content;
