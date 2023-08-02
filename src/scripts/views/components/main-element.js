/* eslint-disable require-jsdoc */
class MainElement extends HTMLElement {
  connectedCallback() {
    // this._mainTitle = this.getAttribute('main-title') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="main" tabindex="0">
            <div class="restoList"></div>
        </main>
        `;
  }
}
customElements.define('main-element', MainElement);
