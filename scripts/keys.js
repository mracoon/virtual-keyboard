import classes from './css_classes.js';

const keys = {

  Backquote: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '`',
      shiftKey: '~',
    },
    ru: {
      key: 'ё', // shiftKey: 'Ё'
    },
  },

  Digit1: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '1',
      shiftKey: '!',
    },
  },

  Digit2: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '2',
      shiftKey: '@',
    },
    ru: {
      key: '2',
      shiftKey: '"',
    },
  },

  Digit3: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '3',
      shiftKey: '#',
    },
    ru: {
      key: '3',
      shiftKey: '№',
    },
  },

  Digit4: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '4',
      shiftKey: '$',
    },
    ru: {
      key: '4',
      shiftKey: ';',
    },
  },

  Digit5: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '5',
      shiftKey: '%',
    },
  },

  Digit6: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '6',
      shiftKey: '^',
    },
    ru: {
      key: '6',
      shiftKey: ':',
    },
  },

  Digit7: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '7',
      shiftKey: '&',
    },
    ru: {
      key: '7',
      shiftKey: '?',
    },
  },

  Digit8: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '8',
      shiftKey: '*',
    },
  },

  Digit9: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '9',
      shiftKey: '(',
    },
  },

  Digit0: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '0',
      shiftKey: ')',
    },
  },

  Minus: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '-',
      shiftKey: '_',
    },
  },

  Equal: {
    row: 'row-1',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '=',
      shiftKey: '+',
    },
  },

  Backspace: {
    row: 'row-1',
    classes: [classes.common.long],
    specName: 'Backspace',
    en: {
      key: '',
    },
  },

  Tab: {
    row: 'row-2',
    classes: [classes.special.tab],
    specName: 'Tab',
    en: {
      key: '\t',
    },
  },

  KeyQ: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'q',
      //  shiftKey: 'Q',
    },
    ru: {
      key: 'й',
      //  shiftKey: 'Й',
    },
  },

  KeyW: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'w',
      //  shiftKey: 'W',
    },
    ru: {
      key: 'ц',
      //  shiftKey: 'Ц',
    },
  },

  KeyE: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'e',
      // shiftKey: 'E',
    },
    ru: {
      key: 'у',
      // shiftKey: 'У',
    },
  },

  KeyR: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'r',
      //  shiftKey: 'R',
    },
    ru: {
      key: 'к',
      //  shiftKey: 'К',
    },
  },

  KeyT: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 't',
      // shiftKey: 'T',
    },
    ru: {
      key: 'е',
      // shiftKey: 'Е',
    },
  },
  KeyY: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'y',
      // shiftKey: 'Y',
    },
    ru: {
      key: 'н',
      // shiftKey: 'Н',
    },
  },
  KeyU: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'u',
      //  shiftKey: 'U',
    },
    ru: {
      key: 'г',
      //  shiftKey: 'Г',
    },
  },
  KeyI: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'i',
      // shiftKey: 'I',
    },
    ru: {
      key: 'ш',
      //  shiftKey: 'Ш',
    },
  },
  KeyO: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'o',
      //  shiftKey: 'O',
    },
    ru: {
      key: 'щ',
      // shiftKey: 'Щ',
    },
  },
  KeyP: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'p',
      //   shiftKey: 'P',
    },
    ru: {
      key: 'з',
      //   shiftKey: 'З',
    },
  },
  BracketLeft: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '[',
      shiftKey: '{',
    },
    ru: {
      key: 'х',
      //   shiftKey: 'Х',
    },
  },
  BracketRight: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: ']',
      shiftKey: '}',
    },
    ru: {
      key: 'ъ',
      //   shiftKey: 'Ъ',
    },
  },
  Backslash: {
    row: 'row-2',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '\\',
      shiftKey: '|',
    },
    ru: {
      key: '\\',
      shiftKey: '/',
    },
  },
  Delete: {
    row: 'row-2',
    classes: [classes.special.delete],
    specName: 'DEL',
    en: {
      key: '',
    },
  },
  CapsLock: {
    row: 'row-3',
    classes: [classes.special.capsLock],
    specName: 'CapsLock',
    en: {
      key: '',
    },
  },
  KeyA: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'a',
      //  shiftKey: 'A',
    },
    ru: {
      key: 'ф',
      // shiftKey: 'Ф',
    },
  },
  KeyS: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 's',
      //   shiftKey: 'S',
    },
    ru: {
      key: 'ы',
      //   shiftKey: 'Ы',
    },
  },

  KeyD: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'd',
      //   shiftKey: 'D',
    },
    ru: {
      key: 'в',
      //  shiftKey: 'В',
    },
  },
  KeyF: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'f',
      //  shiftKey: 'F',
    },
    ru: {
      key: 'а',
      //  shiftKey: 'А',
    },
  },

  KeyG: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'g',
      //   shiftKey: 'G',
    },
    ru: {
      key: 'п',
      //  shiftKey: 'П',
    },
  },
  KeyH: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'h',
      //  shiftKey: 'H',
    },
    ru: {
      key: 'р',
      //  shiftKey: 'Р',
    },
  },
  KeyJ: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'j',
      //  shiftKey: 'J',
    },
    ru: {
      key: 'о',
      // shiftKey: 'О',
    },
  },
  KeyK: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'k',
      //  shiftKey: 'K',
    },
    ru: {
      key: 'л',
      //  shiftKey: 'Л',
    },
  },

  KeyL: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'l',
      //  shiftKey: 'L',
    },
    ru: {
      key: 'д',
      //  shiftKey: 'Д',
    },
  },

  Semicolon: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: ';',
      //  shiftKey: ':',
    },
    ru: {
      key: 'ж',
      //  shiftKey: 'Ж',
    },
  },

  Quote: {
    row: 'row-3',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '\'',
      shiftKey: '"',
    },
    ru: {
      key: 'э',
      //  shiftKey: 'Э',
    },
  },
  Enter: {
    row: 'row-3',
    classes: [classes.common.long, classes.special.enter],
    specName: 'ENTER',
    en: {
      key: '\n',
    },
  },
  ShiftLeft: {
    row: 'row-4',
    classes: [classes.common.long, classes.special.leftShift],
    specName: 'Shift',
    en: {
      key: '',
    },
  },
  KeyZ: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'z',
      //   shiftKey: 'Z',
    },
    ru: {
      key: 'я',
      //  shiftKey: 'Я',
    },
  },
  KeyX: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'x',
      //   shiftKey: 'X',
    },
    ru: {
      key: 'ч',
      //  shiftKey: 'Ч',
    },
  },
  KeyC: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'c',
      //  shiftKey: 'C',
    },
    ru: {
      key: 'с',
      //  shiftKey: 'С',
    },
  },
  KeyV: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'v',
      //   shiftKey: 'V',
    },
    ru: {
      key: 'м',
      //   shiftKey: 'М',
    },
  },
  KeyB: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'b',
      //  shiftKey: 'B',
    },
    ru: {
      key: 'и',
      //  shiftKey: 'И',
    },
  },

  KeyN: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'n',
      //  shiftKey: 'N',
    },
    ru: {
      key: 'т',
      //  shiftKey: 'Т',
    },
  },
  KeyM: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: 'm',
      //  shiftKey: 'M',
    },
    ru: {
      key: 'ь',
      //  shiftKey: 'Ь',
    },
  },
  Comma: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: ',',
      shiftKey: '<',
    },
    ru: {
      key: 'б',
      //  shiftKey: 'Б',
    },
  },
  Period: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '.',
      shiftKey: '>',
    },
    ru: {
      key: 'ю',
      //  shiftKey: 'Ю',
    },
  },
  Slash: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '/',
      shiftKey: '?',
    },
    ru: {
      key: '.',
      shiftKey: ',',
    },
  },
  ArrowUp: {
    row: 'row-4',
    classes: [classes.common.standart],
    specName: '↑', // \u2191
    en: {
      key: '',
    },
  },
  ShiftRight: {
    row: 'row-4',
    classes: [classes.common.long, classes.special.rightShift],
    specName: 'Shift',
    en: {
      key: '',
    },
  },

  ControlLeft: {
    row: 'row-5',
    classes: [classes.common.medium, classes.special.ctrl],
    specName: 'Ctrl',
    en: {
      key: '',
    },
  },
  MetaLeft: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: 'Win',
    en: {
      key: '',
    },
  },
  AltLeft: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: 'Alt',
    en: {
      key: '',
    },
  },
  Space: {
    row: 'row-5',
    classes: [classes.special.space],
    specName: '',
    en: {
      key: ' ',
    },
  },
  AltRight: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: 'Alt',
    en: {
      key: '',
    },
  },
  ControlRight: {
    row: 'row-5',
    classes: [classes.common.medium, classes.special.ctrl],
    specName: 'Ctrl',
    en: {
      key: '',
    },
  },

  ArrowLeft: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: '←', // \u2190
    en: {
      key: '',
    },
  },
  ArrowDown: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: '↓', // \u2193
    en: {
      key: '',
    },
  },

  ArrowRight: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: '→', // \u2192
    en: {
      key: '',
    },
  },

  NumpadMultiply: {
    row: 'row-5',
    classes: [classes.common.standart],
    specName: '',
    en: {
      key: '*',
    },
  },
};

export default keys;
