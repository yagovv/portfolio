document.addEventListener(
  "DOMContentLoaded",
  () => {
    let $title = document.getElementById("main-title");
    new TypeIt($title, {
      strings: ["Welcome.", "I'm Yago Vega, and this is my portfolio."],
      speed: 125,
      breakLines: false,
      autoStart: false
    });
    let $flow = document.getElementById("main-flow");
    setTimeout(() => {
      $title.setAttribute("class", "upper");
      setTimeout(() => {
        $flow.innerHTML = `<yv-main-component></yv-main-component>`;
      }, 2000);
    }, 8);
  },
  false
);
