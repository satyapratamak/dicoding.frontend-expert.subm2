const review = (item) => {
  return `
  <div class="review">
    <h3>${item.name}</h3>
    <p class="reviewDate">${item.date}</p>
    <p class="reviewContent">${item.review}</p>
  </div>
  `;
};
export default review;
