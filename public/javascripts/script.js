document.addEventListener(
  "DOMContentLoaded",
  () => {
    let title = document.getElementById("main-title");
    new TypeIt(title, {
      strings: ["Welcome.", "I'm Yago Vega, and this is my portfolio."],
      speed: 125,
      breakLines: false,
      autoStart: false
    });
    let flow = document.getElementById("main-flow");
    setTimeout(() => {
      title.setAttribute("class", "upper");
      setTimeout(() => {
        flow.innerHTML = `
    <div id="upper-div" class="main-btn">
    <h1>About Me</h1>
  </div>
  <div id="lower-div" class="main-btn">
    <h1>My Projects</h1>
  </div>
    `;
      }, 2000);
    }, 8000);

    const web = `<a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/">
      <div class="card">
        <img src="images/ironhackers.png" alt="image">
        <div class="sub-card">Ironhackers of the Caribbean</div>
      </div>
    </a>
    <a href="https://planit-ironhack.herokuapp.com/">
      <div class="card">
        <img src="images/planit.png" alt="image">
        <div class="sub-card">PLANiT</div>
      </div>
    </a>
    <a href="https://zombye.herokuapp.com/">
      <div class="card">
        <img src="images/zombye.png" alt="image">
        <div class="sub-card">Zombye</div>
      </div>
    </a>`;
    const ux = `<a href="https://yagovv.github.io/Ironhackers-of-the-Caribbean/">
      <div class="card">
        <img src="images/ironhackers.png" alt="image">
        <div class="sub-card">Wellness Project</div>
      </div>
    </a>
    <a href="https://planit-ironhack.herokuapp.com/">
      <div class="card">
        <img src="images/planit.png" alt="image">
        <div class="sub-card">e-Groceries Project</div>
      </div>
    </a>
    <a href="https://zombye.herokuapp.com/">
      <div class="card">
        <img src="images/zombye.png" alt="image">
        <div class="sub-card">Final Project</div>
      </div>
    </a>`;
    // let webButton = document.getElementById("web-btn");
    // let uxButton = document.getElementById("ux-btn");
    // webButton.addEventListener("click", () => {
    //   flow.innerHTML = web;
    // });
    // uxButton.addEventListener("click", () => {
    //   flow.innerHTML = ux;
    // });
  },
  false
);
