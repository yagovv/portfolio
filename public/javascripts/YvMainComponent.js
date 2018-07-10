class YvMainComponent extends HTMLElement {
  constructor(){
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `<button id="about-btn">
    <div id="upper-div" class="main-btn">
    <h1>About Me</h1>
    </div>
    </button>
    <button id="projects-btn">
    <div id="lower-div" class="main-btn">
    <h1>My Projects</h1>
    </div>
    </button>`;
  }
  connectedCallback() {
    $projectsBtn = document.getElementById('projects-btn');
    $aboutBtn = document.getElementById('about-btn');
  }
  _render() {}

}
window.customElements.define("yv-main-component", YvMainComponent);