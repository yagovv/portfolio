class YvAboutComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
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
    <button id="back-main"> Go Back </button>
    `;
    let $backBtn = document.getElementById("back-main");
    let $flow = document.getElementById("main-flow");
    $backBtn.addEventListener("click", event => {
      $flow.innerHTML = "<yv-main-component></yv-main-component>";
    });
  }
}
window.customElements.define("yv-about-component", YvAboutComponent);
