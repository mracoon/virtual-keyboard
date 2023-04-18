import keysData from './scripts/keys.js';

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
container.append(keyboard);

// ---
body.append(container);

// -----------------------------------------------------

console.log(keysData.AltLeft);
