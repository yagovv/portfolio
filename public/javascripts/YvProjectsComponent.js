class YvProjectsComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button id="back-main"> BACK </button>
    <h1>My Projects</h1>
    <div id="projects">
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
      <div class="project-card">
        <div class="overlay-card">
          <p>Lorem Ipsum</p>
          <p>
            <span class="info">JavaScript Game</span>
          </p>
        </div>
        <img src= "" />
      </div>
    </div>
    `;
    let $btnBack = document.getElementById("back-main");
    let $flow = document.getElementById("main-flow");
    $btnBack.addEventListener("click", event => {
      $flow.innerHTML = "<yv-main-component></yv-main-component>";
    });
  }
  _render() {}
}
window.customElements.define("yv-projects-component", YvProjectsComponent);
