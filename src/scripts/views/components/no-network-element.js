/* eslint-disable max-len */
// eslint-disable-next-line require-jsdoc
class NoNetwork extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    this._message = this.getAttribute('message') || 'No Network!';
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = `
        <div class="noNetwork">
            <h2><span>Tidak dapat menampilkan konten :</span> ${this._message}</h2>
        </div>
        `;
  }
}

customElements.define('no-network', NoNetwork);
