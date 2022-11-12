import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DELAY = 1000;

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let selectedDate = null;

refs.btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // selectedDate = new Date(selectedDates[0]);
    selectedDate = selectedDates[0];

    timer(selectedDate);
  },
};

flatpickr(refs.datetimePicker, options);

function timer(selectedDate) {
  if (selectedDate < options.defaultDate) {
    refs.btnStart.disabled = true;
    Notify.failure('Please choose a date in the future');

    return;
  }

  refs.btnStart.disabled = false;

  refs.btnStart.addEventListener('click', onStart);

  function onStart() {
    refs.btnStart.disabled = true;

    const intervalId = setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = selectedDate - currentTime;

      if (deltaTime < 1000) {
        clearInterval(intervalId);
      }

      const time = convertMs(deltaTime);

      addLeadingZero(time);
    }, DELAY);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function padStart(value) {
  return String(value).padStart(2, '0');
  //1 -> 01
  //7 -> 07
  //12 -> 12
}

function addLeadingZero(value) {
  refs.dataDays.textContent = padStart(`${value.days}`);
  refs.dataHours.textContent = padStart(`${value.hours}`);
  refs.dataMinutes.textContent = padStart(`${value.minutes}`);
  refs.dataSeconds.textContent = padStart(`${value.seconds}`);
}
