import keys from './scripts/keys.js';
import buildLayout from './scripts/buildLayout.js';
import generateKeysBtns from './scripts/generateKeysBtns.js';
import buildSpecialBtnsObj from './scripts/buildSpecialBtnsObj.js';
import clickHandler from './scripts/clickHandler.js';
import updKeyBtns from './scripts/updKeyBtns.js';
import soundPlay from './scripts/playSound.js';

let isPlaySound = true;
let capsPressed = false;
let navMode = false;
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
localStorage.setItem('mracoonCopy', '');
if (localStorage.getItem('mracoonLang')) {
  lang = localStorage.getItem('mracoonLang');
} else { localStorage.setItem('mracoonLang', lang); }

buildLayout();

const langInd = document.querySelector('.lang');
langInd.textContent = lang.toUpperCase();
const keyboard = document.querySelector('.keyboard__container');

generateKeysBtns(keys, lang);

window.addEventListener(
  'keydown',
  (e) => {
    e.preventDefault();
    const elID = e.code;
    const elem = document.querySelector(`#${elID}`);
    const specialBtns = buildSpecialBtnsObj();
    const {
      ControlLeft,
      ControlRight,
    } = specialBtns;
    if (elem) {
      soundPlay(isPlaySound);
      isPlaySound = false;
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
      if (!(((elID === 'KeyC') || (elID === 'KeyV') || (elID === 'KeyA') || (elID === 'KeyX')) && (ControlLeft || ControlRight))) {
        clickHandler(elID, lang, '', navMode);
      }
    }
  },
);

window.addEventListener(
  'keyup',
  (e) => {
    const elID = e.code;
    const elem = document.querySelector(`#${e.code}`);
    const specialBtns = buildSpecialBtnsObj();
    const {
      AltLeft,
      ControlLeft,
      ControlRight,
      AltRight,
    } = specialBtns;
    if (elem) {
      if ((elID !== 'CapsLock')) {
        elem.classList.remove('pressed');
      } else {
        capsPressed = !capsPressed;
      }
    }
    if (elID === 'MetaLeft') {
      document.querySelector('.start-menu').classList.toggle('start-menu_active');
      document.querySelector('#MetaLeft').classList.remove('pressed');
    }
    if (elID in specBtns) {
      if (((elID === 'AltLeft') && ControlLeft) || ((elID === 'ControlLeft') && AltLeft)) {
        lang = lang === 'en' ? 'ru' : 'en';
        document.querySelector('#AltLeft').classList.remove('pressed');
        document.querySelector('#ControlLeft').classList.remove('pressed');
        localStorage.setItem('mracoonLang', lang);
        langInd.textContent = lang.toUpperCase();
      }
      if (((elID === 'AltRight') && ControlRight) || ((elID === 'ControlRight') && AltRight)) {
        document.querySelector('#AltRight').classList.remove('pressed');
        document.querySelector('#ControlRight').classList.remove('pressed');
        navMode = !navMode;
      }
    }
    if (((elID === 'KeyC') || (elID === 'KeyX')) && (ControlLeft || ControlRight)) {
      const textarea = document.querySelector('textarea');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const copiedText = textarea.value.substring(start, end);

      document.querySelector('#ControlRight').classList.remove('pressed');
      document.querySelector('#ControlLeft').classList.remove('pressed');
      localStorage.setItem('mracoonCopy', copiedText);
      if ((elID === 'KeyX')) {
        clickHandler('Delete', lang, '');
      }
    }
    if ((elID === 'KeyA') && (ControlLeft || ControlRight)) {
      const textarea = document.querySelector('textarea');
      textarea.select();
    }
    if ((elID === 'KeyV') && (ControlLeft || ControlRight)) {
      clickHandler(elID, lang, localStorage.getItem('mracoonCopy'));
    }
    updKeyBtns(keys, lang);
    isPlaySound = true;
  },
);

keyboard.addEventListener('click', (e) => {
  const pressedBtn = e.target;
  if (pressedBtn.classList.contains('button')) {
    soundPlay(true);
    const elID = pressedBtn.id;
    const specialBtns = buildSpecialBtnsObj();
    const {
      AltLeft,
      ControlLeft, ControlRight,
      AltRight,
    } = specialBtns;

    if (elID in specBtns) {
      pressedBtn.classList.toggle('pressed');
      if (((elID === 'AltLeft') && ControlLeft) || ((elID === 'ControlLeft') && AltLeft)) {
        lang = lang === 'en' ? 'ru' : 'en';
        document.querySelector('#AltLeft').classList.remove('pressed');
        document.querySelector('#ControlLeft').classList.remove('pressed');
        localStorage.setItem('mracoonLang', lang);
        langInd.textContent = lang.toUpperCase();
      }
      if (elID === 'MetaLeft') {
        document.querySelector('.start-menu').classList.toggle('start-menu_active');
        document.querySelector('#MetaLeft').classList.remove('pressed');
      }
      updKeyBtns(keys, lang);
      if (((elID === 'AltRight') && ControlRight) || ((elID === 'ControlRight') && AltRight)) {
        document.querySelector('#AltRight').classList.remove('pressed');
        document.querySelector('#ControlRight').classList.remove('pressed');
        navMode = !navMode;
      }
    }
    if (((elID === 'KeyC') || (elID === 'KeyX')) && (ControlLeft || ControlRight)) {
      const textarea = document.querySelector('textarea');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const copiedText = textarea.value.substring(start, end);

      document.querySelector('#ControlRight').classList.remove('pressed');
      document.querySelector('#ControlLeft').classList.remove('pressed');
      localStorage.setItem('mracoonCopy', copiedText);
      if ((elID === 'KeyX')) {
        clickHandler('Delete', lang, '');
      }
    }

    if ((elID === 'KeyA') && (ControlLeft || ControlRight)) {
      const textarea = document.querySelector('textarea');
      textarea.select();

      document.querySelector('#ControlRight').classList.remove('pressed');
      document.querySelector('#ControlLeft').classList.remove('pressed');
    }
    if ((elID === 'KeyV') && (ControlLeft || ControlRight)) {
      document.querySelector('#ControlRight').classList.remove('pressed');
      document.querySelector('#ControlLeft').classList.remove('pressed');

      clickHandler(elID, lang, localStorage.getItem('mracoonCopy'));
    }
    if (!(((elID === 'KeyC') || (elID === 'KeyV') || (elID === 'KeyA') || (elID === 'KeyX')) && (ControlLeft || ControlRight))) {
      clickHandler(elID, lang, '', navMode);
    }
  }
});

window.addEventListener('click', (e) => {
  if (!e.target.classList.contains('start-menu') && (e.target.id !== 'MetaLeft')) {
    if (document.querySelector('.start-menu').classList.contains('start-menu_active')) {
      document.querySelector('.start-menu').classList.remove('start-menu_active');
    }
  }
});
