class YvAboutComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <h1>About Me</h1>
    <div>
    <ul>
    <li>~ Alia sadipscing definitiones cum ea.</li>

    <li>~ Affert persius constituam eos ex.</li>
    
    <li>~ Malis noluisse conceptam mel ea.</li>
    
    <li>~ Ad pro eligendi dignissim. Ut melius mediocrem vim.</li>
    
    <ul>
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
