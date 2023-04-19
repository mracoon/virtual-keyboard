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
// console.log()

// -----------------------------------------------------
function generateKeysBtns(keysData) {
  // Object.keys(keysData).forEach((key) => {
  Object.entries(keysData).forEach((el) => {
    const [key, data] = el;
    // console.log()
    const btn = document.createElement('div');
    // btn.addEventListener('focus', (e) => { e.target.blur(); });
    btn.id = `${key}`;
    // btn.onselectstart = preventDefault()
    // const btnClasses = ['button', ...keysData[key].classes];
    const btnClasses = ['button', ...data.classes];
    btn.classList.add(...btnClasses);
    /*
     btn.textContent = keysData[key].specName || keysData[key]?.[lang]?.key || keysData[key].en.key;
     const additionalKeyText = keysData[key]?.[lang]?.shiftKey || keysData[key].en.shiftKey; */
    btn.textContent = data.specName || data?.[lang]?.key || data.en.key;
    // const additionalKeyText = data?.[lang]?.shiftKey // || data.en.shiftKey;
    const additionalKeyText = (data?.[lang] === undefined
      ? data.en.shiftKey : data?.[lang]?.shiftKey);
    // console.log(key, additionalKeyText)
    if (additionalKeyText) {
      // (keysData[key]?.[lang]?.shiftKey) {
      const additionalKey = document.createElement('span');
      additionalKey.textContent = additionalKeyText;
      // keysData[key]?.[lang]?.shiftKey
      additionalKey.classList.add('addition-btn');
      btn.append(additionalKey);
    }
    //  document.querySelector(`#${keysData[key].row}`).append(btn);
    document.querySelector(`#${data.row}`).append(btn);
  });
}

generateKeysBtns(keys);

function clickHandler(btnId) {
  textField.focus();
  // document.querySelector(`#${e.code}`).classList.add('pressed');
  // e.preventDefault();
  let cursorPos = textField.selectionStart;

  const text = textField.value;
  // console.log(cursorPos, text.length)
  const newChar = keys[btnId]?.[lang]?.key || keys[btnId].en.key;
  if (cursorPos === text.length) {
    textField.value += newChar;
  } else {
    const firstSubstr = text.slice(0, cursorPos);
    const secondSubstr = text.slice(cursorPos);
    //    console.log(firstSubstr, secondSubstr)
    textField.value = firstSubstr + newChar + secondSubstr;
    cursorPos += 1;
    textField.selectionStart = cursorPos;
    textField.selectionEnd = cursorPos;
  }
  // keys[btnId]?.[lang]?.key || keys[btnId].en.key;
  // console.log(textField.selectionStart)
}

window.addEventListener(
  'keydown',
  (e) => {
    //  textField.focus();
    e.preventDefault();
    document.querySelector(`#${e.code}`).classList.add('pressed');
    clickHandler(e.code);

    // textField.value += keys[e.code]?.[lang]?.key || keys[e.code].en.key;
  },
);

window.addEventListener(
  'keyup',
  (e) => {
    document.querySelector(`#${e.code}`).classList.remove('pressed');
  },
);

keyboard.addEventListener('click', (e) => {
  const pressedBtn = e.target;
  if (pressedBtn.classList.contains('button')) {
    clickHandler(pressedBtn.id);
  }
});

// console.log(textField.selectionStart)
