import keys from './scripts/keys.js';
import buildLayout from './scripts/buildLayout.js';
import generateKeysBtns from './scripts/generateKeysBtns.js';
import buildSpecialBtnsObj from './scripts/buildSpecialBtnsObj.js';
import clickHandler from './scripts/clickHandler.js';
import updKeyBtns from './scripts/updKeyBtns.js';

let capsPressed = false;
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
let lang = 'en';

if (localStorage.getItem('mracoonLang')) {
  lang = localStorage.getItem('mracoonLang');
} else { localStorage.setItem('mracoonLang', lang); }

buildLayout();

const keyboard = document.querySelector('.keyboard__container');

generateKeysBtns(keys, lang);

window.addEventListener(
  'keydown',
  (e) => {
    e.preventDefault();
    const elID = e.code;
    const elem = document.querySelector(`#${elID}`);
    if (elem) {
      if (elID in specBtns) {
        if (elID === 'CapsLock') {
          if (!capsPressed) {
            elem.classList.add('pressed');
          } else {
            elem.classList.remove('pressed');
          }
        } else {
          elem.classList.add('pressed');
        }

        updKeyBtns(keys, lang);
      } else { elem.classList.add('pressed'); }

      clickHandler(elID, lang);
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
      const specialBtns = buildSpecialBtnsObj();
      const {
        AltLeft,
        ControlLeft,
      } = specialBtns;
      if (((elID === 'AltLeft') && ControlLeft) || ((elID === 'ControlLeft') && AltLeft)) {
        lang = lang === 'en' ? 'ru' : 'en';
        document.querySelector('#AltLeft').classList.remove('pressed');
        document.querySelector('#ControlLeft').classList.remove('pressed');
        localStorage.setItem('mracoonLang', lang);
      }
    }
    updKeyBtns(keys, lang);
  },
);

keyboard.addEventListener('click', (e) => {
  const pressedBtn = e.target;
  if (pressedBtn.classList.contains('button')) {
    const elID = pressedBtn.id;
    const specialBtns = buildSpecialBtnsObj();
    const {
      AltLeft,
      ControlLeft,
    } = specialBtns;
    if (elID in specBtns) {
      pressedBtn.classList.toggle('pressed');
      if (((elID === 'AltLeft') && ControlLeft) || ((elID === 'ControlLeft') && AltLeft)) {
        lang = lang === 'en' ? 'ru' : 'en';
        document.querySelector('#AltLeft').classList.remove('pressed');
        document.querySelector('#ControlLeft').classList.remove('pressed');
        localStorage.setItem('mracoonLang', lang);
      }
      updKeyBtns(keys, lang);
    }
    clickHandler(elID, lang);
  }
});
