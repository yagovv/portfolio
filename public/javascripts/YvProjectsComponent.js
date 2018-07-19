class YvProjectsComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <button id="back-main"> BACK </button>
    <h1>My Projects</h1>
    <div id="projects">
      <a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/" class="project-card">
        <div class="overlay-card">
          <h2>Ironhackers Of The Caribbean</h2>
          <p>
            1vs1 JavaScript Game
          </p>
        </div>
        <img src= "images/ironhackers.png" />
      </a>
      <a href="https://planit-ironhack.herokuapp.com/" class="project-card">
        <div class="overlay-card">
          <h2>PLANiT</h2>
          <p>
            Express.js Website for making plans!
          </p>
        </div>
        <img src="images/planit.png"/>
      </a>
      <a href="https://github.com/yagovv/Zombye" class="project-card">
        <div class="overlay-card">
          <h2>Zombye</h2>
          <p>
            MEAN Stack Website for surviving a zombie apocalypse!
          </p>
        </div>
        <img src= "images/zombye.png" />
      </a>
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
}
window.customElements.define("yv-projects-component", YvProjectsComponent);
