class YvAboutComponent extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `
    <h1>About Me</h1>
    <div>
    <p>~ Alia sadipscing definitiones cum ea.

    ~ Affert persius constituam eos ex.
    
    ~ Malis noluisse conceptam mel ea.
    
    ~ Ad pro eligendi dignissim. Ut melius mediocrem vim.
    </p>
    <span class= "specialties"> Specialties: Annoying Brenda. </span>
    </div>
    <div>
      <img src="" />
    </div>
    
    <button id="back-main">
    </button>`;
  }
  connectedCallback() {}
  _render() {}
}
window.customElements.define("yv-about-component", YvAboutComponent);
