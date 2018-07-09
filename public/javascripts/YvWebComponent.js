class YvWebComponent extends HTMLElement {
  constructor(){
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `<a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/">
      <div class="card">
        <img src="images/ironhackers.png" alt="image">
        <div class="sub-card">Ironhackers of the Caribbean</div>
      </div>
    </a>
    <a href="https://planit-ironhack.herokuapp.com/">
      <div class="card">
        <img src="images/planit.png" alt="image">
        <div class="sub-card">PLANiT</div>
      </div>
    </a>
    <a href="https://zombye.herokuapp.com/">
      <div class="card">
        <img src="images/zombye.png" alt="image">
        <div class="sub-card">Zombye</div>
      </div>
    </a>`;
  }
  connectedCallback() {
  }
  _render() {}
}
window.customElements.define("yv-web-component", YvWebComponent);