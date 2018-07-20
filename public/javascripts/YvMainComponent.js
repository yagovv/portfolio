class YvMainComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="container-projects">
      <button id="about-btn" class="main-btn">
      <div id="upper-div" >
        <h1>About Me</h1>
      </div>
      </button>
      <div class='line'></div>
        <button id="projects-btn" class="main-btn">
      <div id="lower-div">
        <h1>My Projects</h1>
      </div>
      </button>
    </div>`;
    let $flow = document.getElementById("main-flow");
    let projectsClickedEvent = document.createEvent("Event");
    projectsClickedEvent.initEvent("projectsClicked", true, true);
    let $projectsBtn = document.getElementById("projects-btn");
    $projectsBtn.addEventListener("click", event => {
      $projectsBtn.dispatchEvent(projectsClickedEvent);
    });

    $flow.addEventListener("projectsClicked", event => {
      $flow.innerHTML = `<yv-projects-component></yv-projects-component>`;
    });
    $flow.addEventListener("aboutClicked", event => {
      $flow.innerHTML = `<yv-about-component></yv-about-component>`;
    });
    let aboutClickedEvent = document.createEvent("Event");
    aboutClickedEvent.initEvent("aboutClicked", true, true);
    let $aboutBtn = document.getElementById("about-btn");
    $aboutBtn.addEventListener("click", event => {
      $aboutBtn.dispatchEvent(aboutClickedEvent);
    });
  }
  _render() {}
}
window.customElements.define("yv-main-component", YvMainComponent);
