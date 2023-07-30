/* eslint-disable max-len */
const likeButtonEl = () => `
    <button aria-label="like this movie" id="likeButton" class="like" title="Tambahkan ke favorit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="20" fill="currentColor"><path d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242zM9.293 1.55l.707.707.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"></path></svg>
    </button>
`;
const likedButtonEl = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like" title="Hapus dari favorit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="20" fill="currentColor"><path d="M9.293 1.55l.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"></path></svg>
    </button>
`;
export {likeButtonEl, likedButtonEl};
