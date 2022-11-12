const DELAY = 1000;

const refs = {
  btnDataStart: document.querySelector('[data-start]'),
  btnDataStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.btnDataStart.addEventListener('click', onStart);
refs.btnDataStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
  refs.btnDataStart.setAttribute('disabled', 'disabled');
}

function onStop() {
  clearInterval(timerId);

  refs.btnDataStart.removeAttribute('disabled', 'disabled');
}
