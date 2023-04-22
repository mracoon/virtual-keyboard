import keys from './scripts/keys.js';

const specBtns = {
  CapsLock: false,
  ShiftLeft: false,
  ShiftRight: false,
  ControlLeft: false,
  ControlRight: false,
  MetaLeft: false,
  AltLeft: false,
  AltRight: false,
};
const lang = 'en';
// -----------create base structure---------------

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

const textField = document.createElement('textarea');
textField.autofocus = true;
// textField.cols = 20;
textField.rows = 10;
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

function clearKeyboard() {
  const kbRows = document.querySelectorAll('.keyboard__row');
  kbRows.forEach((el) => { const row = el; row.innerHTML = ''; });
}

function addAdditionalKey(keysData, btnId, language, btn, ShiftLeft = false, ShiftRight = false) {
  const additionalKeyText = (keysData[btnId]?.[language] === undefined
    ? keysData[btnId].en.shiftKey : keysData[btnId]?.[language]?.shiftKey);

  if (additionalKeyText
    && (btn.textContent.toLocaleLowerCase() !== additionalKeyText.toLowerCase())) {
    const additionalKey = document.createElement('span');
    additionalKey.textContent = additionalKeyText;
    additionalKey.classList.add('addition-btn');
    if (ShiftLeft || ShiftRight) {
      btn.classList.add('non-act');
      additionalKey.classList.add('act');
    } else {
      btn.classList.remove('non-act');
      additionalKey.classList.remove('act');
    }

    btn.append(additionalKey);
  }
}

function generateKeysBtns(keysData, language) {
  clearKeyboard();

  Object.entries(keysData).forEach((el) => {
    const [key, data] = el;

    const btn = document.createElement('div');

    btn.id = `${key}`;

    const btnClasses = ['button', ...data.classes];
    btn.classList.add(...btnClasses);

    btn.textContent = data.specName || data?.[lang]?.key || data.en.key;

    addAdditionalKey(keysData, key, language, btn);
    document.querySelector(`#${data.row}`).append(btn);
  });
}

generateKeysBtns(keys, lang);

function buildSpecialBtnsObj() {
  const CapsLock = document.querySelector('#CapsLock').classList.contains('pressed');

  const ShiftLeft = document.querySelector('#ShiftLeft').classList.contains('pressed');
  const ShiftRight = document.querySelector('#ShiftRight').classList.contains('pressed');
  const ControlLeft = document.querySelector('#ControlLeft').classList.contains('pressed');
  const ControlRight = document.querySelector('#ControlRight').classList.contains('pressed');
  const AltLeft = document.querySelector('#AltLeft').classList.contains('pressed');
  const AltRight = document.querySelector('#AltRight').classList.contains('pressed');
  const MetaLeft = document.querySelector('#MetaLeft').classList.contains('pressed');

  return {
    CapsLock, ShiftLeft, ShiftRight, ControlLeft, ControlRight, AltLeft, AltRight, MetaLeft,
  };
}

function createRowLengthArray(text) {
  let sum = 0;
  // const rowLengths =
  return text.split('\n').map((el, i) => {
    // let addNL = 1;
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL;
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
  const specialBtns = buildSpecialBtnsObj();
  const text = textField.value;
  const { CapsLock, ShiftLeft, ShiftRight } = specialBtns;
  let newChar = keys[btnId]?.[lang]?.key || keys[btnId].en.key;
  if ((ShiftLeft || ShiftRight) && !CapsLock) {
    // only shifts (one or both) (caps not pressed)
    newChar = keys[btnId]?.[lang]?.shiftKey || keys[btnId].en.shiftKey || newChar.toUpperCase();
  } else if (!ShiftRight && !ShiftLeft && CapsLock) {
    // only caps (no one of shifts pressed)
    newChar = newChar.toUpperCase();
  } else if ((ShiftLeft || ShiftRight) && CapsLock) {
    // one (or both) shifts and caps(doesn't matter)
    newChar = keys[btnId]?.[lang]?.shiftKey || keys[btnId].en.shiftKey || newChar;
  }

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

function updKeyBtns(keysData, language) {
  const specialBtns = buildSpecialBtnsObj();
  const btns = document.querySelectorAll('.updated');
  // console.log(btns)
  const { CapsLock, ShiftLeft, ShiftRight } = specialBtns;
  const isUpper = ((!ShiftRight && !ShiftLeft) && CapsLock)
    || (!CapsLock && (ShiftRight || ShiftLeft));
  // true if caps or one of the Shifts pressed
  // false if caps and both shifts pressed or nothing

  btns.forEach((el) => {
    const btn = el;
    const btnId = btn.id;
    let newChar = keysData[btnId]?.[language]?.key || keysData[btnId].en.key;

    if (isUpper) {
      newChar = newChar.toUpperCase();
    }
    btn.textContent = newChar;

    addAdditionalKey(keysData, btnId, language, btn, ShiftLeft, ShiftRight);
  });
}
let capsPressed = false;
window.addEventListener(
  'keydown',
  (e) => {
    e.preventDefault();
    const elID = e.code;
    const elem = document.querySelector(`#${elID}`);
    if (elem) {
      const spBtns = {
        CapsLock: false,
        ShiftLeft: false,
        ShiftRight: false,
        ControlLeft: false,
        ControlRight: false,
        MetaLeft: false,
        AltLeft: false,
        AltRight: false,
      };
      if (elID in specBtns) {
        if (elID === 'CapsLock') {
          /*  if (!buildSpecialBtnsObj().CapsLock) {
             elem.classList.add('pressed');
           } else {
             elem.classList.remove('pressed');
           } */
          if (capsPressed) {
            elem.classList.add('pressed');
          } else {
            elem.classList.remove('pressed');
          }
        } else {
          elem.classList.add('pressed');
        }

        spBtns[elID] = !specBtns[elID];
        updKeyBtns(keys, lang);
      } else { elem.classList.add('pressed'); }

      clickHandler(elID);
    }
  },
);

window.addEventListener(
  'keyup',
  (e) => {
    const elID = e.code;
    const elem = document.querySelector(`#${e.code}`);
    if (elem) {
      if ((elID !== 'CapsLock')) {
        elem.classList.remove('pressed');
      } else {
        capsPressed = !capsPressed;
      }
    }
    if (elID in specBtns) {
      specBtns[elID] = !specBtns[elID];
    }
    updKeyBtns(keys, lang);
  },
);

keyboard.addEventListener('click', (e) => {
  const pressedBtn = e.target;
  if (pressedBtn.classList.contains('button')) {
    const elID = pressedBtn.id;
    if (elID in specBtns) {
      pressedBtn.classList.toggle('pressed');
      specBtns[elID] = !specBtns[elID];
      updKeyBtns(keys, lang);
    }
    clickHandler(elID);
  }
});
