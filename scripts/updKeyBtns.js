import buildSpecialBtnsObj from './buildSpecialBtnsObj.js';
import addAdditionalKey from './addAdditionalKey.js';

const updKeyBtns = (keysData, language) => {
  const specialBtns = buildSpecialBtnsObj();
  const btns = document.querySelectorAll('.updated');
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
};

export default updKeyBtns;
