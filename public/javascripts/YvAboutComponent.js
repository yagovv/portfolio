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
        <li>Full Stack Web Developer (MEAN Stack).</li>

        <li>UX/UI Designer.</li>

        <li>Born and raised in Madrid, Spain.</li>

        <li>Guitar player.</li>

        <li><a href="https://github.com/yagovv/">Github</a>, <a href="https://www.linkedin.com/in/yago-vega/">LinkedIn</a></li>        
        </ul>

        <span class= "specialties"> Specialties: Node.js, Angular 2, MongoDB, Express.js, Sketch, Flinto. </span>
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
