/* change body's background color */

let root = document.documentElement;

/* SHOW SCROLL UP */
/* header scroll*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  const mainheader = document.getElementById("fixed-top");
  if (this.scrollY >= 100) 
  mainheader.classList.add("header-styled");
  else  mainheader.classList.remove("header-styled");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) 
  scrollUp.classList.add("show-scroll");

  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay:200
  // reset: true
});
const sr2 = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 1000,
    delay: 100
    // reset: true
  });
// sr.reveal(`.section1-text, .section1-slider`);
sr.reveal(`.f1,.f2,.f3,.f4`, {
  interval: 100
});
sr2.reveal(`.footer-logo ,#fixed-top,.c1,.c2,.c4,.c3`, {
    interval: 100
  });
sr.reveal(`.event-items, .imgs-slider,.section3-text,.exp-items,.slide-img`, { origin: "left" });
sr.reveal(`.text ,.about-items,.events-imgs,.exp-imgs`, { origin: "right" });