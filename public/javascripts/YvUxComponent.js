class YvUxComponent extends HTMLElement {
  constructor(){
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `<a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/">
    <div class="card">
      <img src="images/ironhackers.png" alt="image">
      <div class="sub-card">Wellness Project</div>
    </div>
  </a>
  <a href="https://planit-ironhack.herokuapp.com/">
    <div class="card">
      <img src="images/planit.png" alt="image">
      <div class="sub-card">e-Groceries Project</div>
    </div>
  </a>
  <a href="https://zombye.herokuapp.com/">
    <div class="card">
      <img src="images/zombye.png" alt="image">
      <div class="sub-card">Final Project</div>
    </div>
  </a>`;
  }
  connectedCallback() {
  }
  _render() {}
}
window.customElements.define("yv-ux-component", YvUxComponent);