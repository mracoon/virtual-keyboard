import clearKeyboard from './clearKeyboard.js';
import addAdditionalKey from './addAdditionalKey.js';

const generateKeysBtns = (keysData, language) => {
  clearKeyboard();

  Object.entries(keysData).forEach((el) => {
    const [key, data] = el;

    const btn = document.createElement('div');

    btn.id = `${key}`;

    const btnClasses = ['button', ...data.classes];
    btn.classList.add(...btnClasses);

    btn.textContent = data.specName || data?.[language]?.key || data.en.key;

    addAdditionalKey(keysData, key, language, btn);
    document.querySelector(`#${data.row}`).append(btn);
  });
};

export default generateKeysBtns;
