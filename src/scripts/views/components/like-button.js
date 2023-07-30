import FavoriteResto from '../../globals/favorite-resto';
import {likeButtonEl, likedButtonEl} from './templates/like-button-template';

const LikeButton = {
  async init({likeButtonContainer, resto}) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;
    await this._renderButton();
  },
  async _renderButton() {
    const {id} = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButtonEl();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.addResto(this._resto);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = likedButtonEl();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};
export default LikeButton;
