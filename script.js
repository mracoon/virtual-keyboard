import keys from './scripts/keys.js';

const lang = 'ru';
// -----------create base structure---------------

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

const textField = document.createElement('textarea');
textField.autofocus = true;
// textField.cols = 20;
textField.rows = 10;
textField.value = 'ddd\ndddddd\nddddddddd\nd\n\n\ndddddd\ndd\ndddddddd';// '';

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

function createRowLengthArray(text) {
  let sum = 0;
  // const rowLengths =
  return text.split('\n').map((el, i) => {
    // let addNL = 1;
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL; // + i;
    //  return [el.length + addNL, sum];
    return [el.length, sum];
  }); // rowLengths: [row length, sum]
}
function findCursorPos(rowLengths, cursorPos) {
  return rowLengths.findIndex((el) => el[1] >= cursorPos);
}

function upDownNavHandler(startCursorPos, text, dir = 'down') {
  const rowLengths = createRowLengthArray(text, true);
  const curCursorRow = findCursorPos(rowLengths, startCursorPos);

  let newCursorPos = startCursorPos;
  const totalRows = rowLengths.length;

  const prevRow = curCursorRow > 0 ? rowLengths[curCursorRow - 1] : [-1, -1];
  const [prevRowLength, prevSum] = prevRow;

  const nextRow = curCursorRow < totalRows - 1 ? rowLengths[curCursorRow + 1] : [0, startCursorPos];
  const [nextRowLength, nextSum] = nextRow;

  const charFromBeginingRow = (startCursorPos - prevSum) - 1;

  switch (dir) {
    case 'up':
      if (prevRowLength <= charFromBeginingRow) {
        newCursorPos = curCursorRow > 0 ? prevSum : startCursorPos;
        // запрещает переход с верхней строки
      } else {
        newCursorPos -= (prevRowLength + 1);
      }
      break;
    default: // down
      if (nextRowLength <= charFromBeginingRow) {
        newCursorPos = nextSum;// nextRow[1]
      } else {
        newCursorPos = charFromBeginingRow + rowLengths[curCursorRow][1] + 1; // standart
      }
      break;
  }

  return newCursorPos;
}

function clickHandler(btnId) {
  textField.focus();

  let cursorPos = textField.selectionStart;

  const text = textField.value;

  const newChar = keys[btnId]?.[lang]?.key || keys[btnId].en.key;
  const firstSubstr = text.slice(0, cursorPos);
  const secondSubstr = text.slice(cursorPos);
  if (newChar) { // add new char
    textField.value = firstSubstr + newChar + secondSubstr;
    cursorPos += 1;
  } else if (btnId === 'Backspace' && cursorPos > 0) {
    const newfirstString = firstSubstr.slice(0, -1);
    textField.value = newfirstString + newChar + secondSubstr;
    cursorPos -= 1;
  } else if (btnId === 'Delete') { // TODO: удаление выделенного текста
    const newSecondString = secondSubstr.slice(1);
    textField.value = firstSubstr + newChar + newSecondString;
  } else if (btnId === 'ArrowLeft' && cursorPos > 0) {
    cursorPos -= 1;
  } else if (btnId === 'ArrowRight') {
    cursorPos += 1;
  } else if (btnId === 'ArrowDown') {
    cursorPos = upDownNavHandler(cursorPos, text);
  } else if (btnId === 'ArrowUp') {
    cursorPos = upDownNavHandler(cursorPos, text, 'up');
  }
  textField.selectionStart = cursorPos;
  textField.selectionEnd = cursorPos;
}
window.addEventListener(
  'keydown',
  (e) => {
    //  textField.focus();
    e.preventDefault();
    const elem = document.querySelector(`#${e.code}`);
    if (elem) {
      elem.classList.add('pressed');
      clickHandler(e.code);
    }
    //  document.querySelector(`#${e.code}`).classList.add('pressed');
    // clickHandler(e.code);

    // textField.value += keys[e.code]?.[lang]?.key || keys[e.code].en.key;
  },
);

window.addEventListener(
  'keyup',
  (e) => {
    const elem = document.querySelector(`#${e.code}`);
    if (elem) { elem.classList.remove('pressed'); }
  },
);

keyboard.addEventListener('click', (e) => {
  const pressedBtn = e.target;
  if (pressedBtn.classList.contains('button')) {
    clickHandler(pressedBtn.id);
  }
});

// console.log(textField.selectionStart)
