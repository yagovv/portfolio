class YvAboutComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="about-div">
      <h1>About Me</h1>
      <div class="left">
        <ul>
        <li>~ Alia sadipscing definitiones cum ea.</li>
    
        <li>~ Affert persius constituam eos ex.</li>
        
        <li>~ Malis noluisse conceptam mel ea.</li>
        
        <li>~ Ad pro eligendi dignissim. Ut melius mediocrem vim.</li>
        
        <ul>
        <span class= "specialties"> Specialties: Annoying Brenda. </span>
      </div>
      <div class="right">
        <img src="" />
      </div>
      <button id="back-main"> Go Back </button>
    </div>
    `;
    let $backBtn = document.getElementById("back-main");
    let $flow = document.getElementById("main-flow");
    $backBtn.addEventListener("click", event => {
      $flow.innerHTML = "<yv-main-component></yv-main-component>";
    });
  }
}
window.customElements.define("yv-about-component", YvAboutComponent);
