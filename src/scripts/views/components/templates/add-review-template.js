const addReviewElement = () => {
  return `
    <div id="addReviewContainer">
      <h2>Tambahkan Ulasan</h2>
      <form id="addReview">
        <input type="text" id="reviewName" placeholder="Nama">
        <textarea id="reviewContent" placeholder="Tulis ulasan ..."></textarea>
        <input type="submit" value="Kirim" class="button-kirim">
      </form>
    </div>
    `;
};
export default addReviewElement;
