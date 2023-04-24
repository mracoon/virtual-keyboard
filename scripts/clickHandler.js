import keys from './keys.js';
import buildSpecialBtnsObj from './buildSpecialBtnsObj.js';
import upDownNavHandler from './upDownNavHandler.js';

const clickHandler = (btnId, lang, copy = '') => {
  const textField = document.querySelector('textarea');
  textField.focus();
  let cursorPos = textField.selectionStart;
  let cursorPosEnd = textField.selectionEnd;
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
    newChar = newChar.toLowerCase();
  }
  if (copy) {
    newChar = copy; // localStorage.getItem('mracoonCopy');
  }
  const firstSubstr = text.slice(0, cursorPos);
  const secondSubstr = text.slice(cursorPosEnd);
  if (newChar) { // add new char
    textField.value = firstSubstr + newChar + secondSubstr;
    // cursorPos += 1;
    if (copy) {
      cursorPos += copy.length;
    } else {
      cursorPos += 1;
    }
    cursorPosEnd = cursorPos;
  } else if (btnId === 'Backspace' && cursorPos > 0) {
    const newfirstString = cursorPos === cursorPosEnd ? firstSubstr.slice(0, -1) : firstSubstr;
    textField.value = newfirstString + newChar + secondSubstr;
    if (cursorPos === cursorPosEnd) {
      cursorPos -= 1;
    }
    cursorPosEnd = cursorPos;
  } else if (btnId === 'Delete') {
    const newSecondString = cursorPos === cursorPosEnd ? secondSubstr.slice(1) : secondSubstr;
    textField.value = firstSubstr + newChar + newSecondString;
    cursorPosEnd = cursorPos;
  } else if (btnId === 'ArrowLeft' && cursorPos > 0) {
    cursorPos -= 1;
    cursorPosEnd = cursorPos;
  } else if (btnId === 'ArrowRight') {
    cursorPos += 1;
    cursorPosEnd = cursorPos;
  } else if (btnId === 'ArrowDown') {
    cursorPos = upDownNavHandler(cursorPos, text);
    cursorPosEnd = cursorPos;
  } else if (btnId === 'ArrowUp') {
    cursorPos = upDownNavHandler(cursorPos, text, 'up');
    cursorPosEnd = cursorPos;
  }
  textField.selectionStart = cursorPos;
  textField.selectionEnd = cursorPosEnd;
};

export default clickHandler;
