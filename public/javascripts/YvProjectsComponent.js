class YvProjectsComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <div class="projects-div">
    <button id="back-main"> BACK </button>
    <h1>My Projects</h1>
    <div id="projects">
      <a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/" target="_blank" class="project-card">
        <div class="overlay-card">
          <h2>Ironhackers Of The Caribbean</h2>
          <p>
            1vs1 JavaScript Game
          </p>
        </div>
        <img src= "images/ironhackers.png" />
      </a>
      <a href="https://planit-ironhack.herokuapp.com/" target="_blank" class="project-card">
        <div class="overlay-card">
          <h2>PLANiT</h2>
          <p>
            Express.js Website for making plans!
          </p>
        </div>
        <img src="images/planit.png"/>
      </a>
      <a href="https://github.com/yagovv/Zombye" target="_blank" class="project-card">
        <div class="overlay-card">
          <h2>Zombye</h2>
          <p>
            MEAN Stack Website for surviving a zombie apocalypse!
          </p>
        </div>
        <img src= "images/zombye.png" />
      </a>
      <a href="https://www.youtube.com/watch?v=jcs5O4uk2G4" target="_blank" class="project-card">
        <div class="overlay-card">
          <h2>DressApp</h2>
          <p>
           UX/UI Study Case for dressing up
          </p>
        </div>
        <img src= "images/dressapp.png" />
      </a>
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
