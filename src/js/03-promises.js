import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  btnSubmit: document.querySelector('.form >button'),
};

refs.btnSubmit.addEventListener('click', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let amount = Number(refs.formEl.amount.value);
  let delayInp = Number(refs.formEl.delay.value);
  let step = Number(refs.formEl.step.value);
  refs.btnSubmit.disabled = true;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInp += step;
  }

  setTimeout(() => {
    refs.btnSubmit.disabled = false;
  }, delayInp);

  refs.formEl.amount.value = '';
  refs.formEl.delay.value = '';
  refs.formEl.step.value = '';
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
