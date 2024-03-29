function isMobileDevicee() {
  return (
    void 0 !== window.orientation ||
    -1 !== navigator.userAgent.indexOf("IEMobile")
  );
}
isMobileDevicee() &&
  (document.querySelector("#mainelements").style.pointerEvents = "all");
const mouthSpeed = 0.3,
  easeType = Power2.easeOut,
  mouthOpen = gsap.timeline({ paused: !0 });
mouthOpen.to(".mouth-back", { duration: 0.3, ease: easeType, y: -70 }, 0),
  mouthOpen.to(".tongue", { duration: 0.3 * 1.5, ease: easeType, y: -70 }, 0),
  mouthOpen.to(
    ".teeth",
    { duration: 0.3, ease: easeType, y: -70, scaleY: 1.2 },
    0
  ),
  mouthOpen.to(
    ".body",
    {
      duration: 0.3,
      ease: easeType,
      scaleY: 1.06,
      transformOrigin: "center bottom",
    },
    0
  ),
  mouthOpen.to(".freckles", { duration: 0.3, ease: easeType, y: -10 }, 0),
  mouthOpen.to(".ears", { duration: 0.3, ease: easeType, y: 6 }, 0),
  mouthOpen.to(".eye-right", { duration: 0.3, ease: easeType, x: -2 }, 0),
  mouthOpen.to(".eye-left", { duration: 0.3, ease: easeType, x: 2 }, 0),
  mouthOpen.to(".eyes", { duration: 0.3, ease: easeType, y: 2 }, 0),
  mouthOpen.to(".nostrils", { duration: 0.3, ease: easeType, y: -6 }, 0);
const button = document.querySelector("#hippobtn");
function enterButton() {
  mouthOpen.play();
}
function leaveButton() {
  mouthOpen.reverse();
}
button.addEventListener("mouseenter", enterButton),
  button.addEventListener("mouseleave", leaveButton);
const earWiggle = gsap.timeline({ paused: !0, repeat: 2 });
function earWigglePlay() {
  earWiggle.play(0);
}
earWiggle.set(".ear-right", { transformOrigin: "center center" }),
  earWiggle.to(".ear-right", { duration: 0.1, rotation: 45 }),
  earWiggle.to(".ear-right", { duration: 0.1, rotation: 0 }),
  window.setInterval(earWigglePlay, 2500);
const eyeRightPupil = document.querySelector(".eye-right-pupil"),
  eyeLeftPupil = document.querySelector(".eye-left-pupil"),
  eyeLeftInner = document.querySelector(".eye-left-inner"),
  innerEyeWidth = eyeLeftInner.getBoundingClientRect().width,
  innerEyeHeight = eyeLeftInner.getBoundingClientRect().height,
  pupilWidth = eyeLeftPupil.getBoundingClientRect().width,
  pupilHeight = eyeLeftPupil.getBoundingClientRect().height,
  xMovement = (innerEyeWidth - pupilWidth) / 2,
  yMovement = (innerEyeHeight - pupilHeight) / 2;
function updateEyePosition(e) {
  const t = ((e.clientX / document.body.clientWidth) * 2 - 1) * xMovement,
    n = ((e.clientY / document.body.clientHeight) * 2 - 1) * yMovement;
  (eyeLeftPupil.style.transform = `translate(${t}px, ${n}px)`),
    (eyeRightPupil.style.transform = `translate(${t}px, ${n}px)`);
}
window.addEventListener("mousemove", updateEyePosition);
let lastScrollPos = 0;
window.addEventListener("wheel", function (e) {
  const t = e.offsetY,
    n = t < lastScrollPos;
  t > lastScrollPos
    ? gsap.to("nav", { y: "-100%", duration: 0.75, ease: "power4.inOut" })
    : n && gsap.to("nav", { y: "0%", duration: 0.75, ease: "power4.inOut" }),
    (lastScrollPos = t);
});
