import addReviewElement from './templates/add-review-template';
import Restaurants from '../../globals/api';
import review from './templates/review-template';
// eslint-disable-next-line require-jsdoc
class Reviews {
  // eslint-disable-next-line require-jsdoc
  constructor({reviewsContainer, reviewsListEl, dataId}) {
    this._reviewsContainer = reviewsContainer;
    this._reviewsListEl = reviewsListEl;
    this._dataId = dataId;
  }

  // eslint-disable-next-line require-jsdoc
  addReview() {
    this._reviewsContainer.innerHTML += addReviewElement();
  }

  // eslint-disable-next-line require-jsdoc
  async list() {
    Restaurants.getById(this._dataId).then((res) => {
      const data = res.restaurant.customerReviews;
      const reviewEl = document.querySelector('#reviews');
      reviewEl.innerHTML = '';
      // eslint-disable-next-line max-len
      reviewEl.innerHTML += data.length < 1 ? `<h2>Belum ada ulasan</h2>` : `<h2>${data.length} Ulasan :</h2>`;
      data.reverse().forEach((item) => {
        reviewEl.innerHTML += review(item);
      });
    });
  }

  // eslint-disable-next-line require-jsdoc
  submitReview() {
    const formSubmit = document.querySelector('#addReview');
    formSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#reviewName').value;
      const review = document.querySelector('#reviewContent').value;
      Restaurants.postReview({
        id: this._dataId,
        name,
        review,
      }).then(() => {
        this.list();
        formSubmit.reset();
      });
    });
  }
}
export default Reviews;
