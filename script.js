import keys from './scripts/keys.js';

const lang = 'ru';
// -----------create base structure---------------

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

const textField = document.createElement('textarea');
textField.autofocus = true;
// textField.cols = 20;
// textField.rows = 10;
textField.value = '';

container.append(textField);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard__container');

for (let i = 1; i < 6; i += 1) {
  const row = document.createElement('div');
  const rowID = `row-${i}`;
  row.classList.add(rowID, 'keyboard__row');
  row.id = rowID;
  keyboard.append(row);
}

container.append(keyboard);

// ---
body.append(container);

// -----------------------------------------------------
function generateKeysBtns(keysData) {
  Object.keys(keysData).forEach((key) => {
    const btn = document.createElement('button');
    btn.id = `${key}`;
    const btnClasses = ['button', ...keysData[key].classes];
    btn.classList.add(...btnClasses);
    btn.textContent = keysData[key].specName || keysData[key]?.[lang]?.key || keysData[key].en.key;
    const additionalKeyText = keysData[key]?.[lang]?.shiftKey || keysData[key].en.shiftKey;
    if (additionalKeyText) {
      // (keysData[key]?.[lang]?.shiftKey) {
      const additionalKey = document.createElement('span');
      additionalKey.textContent = additionalKeyText;
      // keysData[key]?.[lang]?.shiftKey
      additionalKey.classList.add('addition-btn');
      btn.append(additionalKey);
    }
    document.querySelector(`#${keysData[key].row}`).append(btn);
  });
}

generateKeysBtns(keys);

window.addEventListener(
  'keydown',
  (e) => {
    document.querySelector(`#${e.code}`).classList.add('pressed');
  },
);
window.addEventListener(
  'keyup',
  (e) => {
    document.querySelector(`#${e.code}`).classList.remove('pressed');
  },
);
