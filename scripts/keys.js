import classes from './css_classes';

const keys = {

    Backquote: {
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
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '1',
            shiftKey: '!',
        },
    },

    Digit2: {
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
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '5',
            shiftKey: '%',
        },
    },

    Digit6: {
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
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '8',
            shiftKey: '*',
        },
    },

    Digit9: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '9',
            shiftKey: '(',
        },
    },

    Digit0: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '0',
            shiftKey: ')',
        },
    },

    Minus: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '-',
            shiftKey: '_',
        },
    },

    Equal: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '=',
            shiftKey: '+',
        },
    },

    Backspace: {
        classes: [classes.common.long],
        specName: 'Backspace',
        en: {
            key: 'Backspace',
        },
    },

    Tab: {
        classes: [classes.special.tab],
        specName: 'Tab',
        en: {
            key: '\t',
        },
    },

    KeyQ: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'q',
            shiftKey: 'Q',
        },
        ru: {
            key: 'й',
            shiftKey: 'Й',
        },
    },

    KeyW: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'w',
            shiftKey: 'W',
        },
        ru: {
            key: 'ц',
            shiftKey: 'Ц',
        },
    },

    KeyE: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'e',
            shiftKey: 'E',
        },
        ru: {
            key: 'у',
            shiftKey: 'У',
        },
    },

    KeyR: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'r',
            shiftKey: 'R',
        },
        ru: {
            key: 'к',
            shiftKey: 'К',
        },
    },

    KeyT: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 't',
            shiftKey: 'T',
        },
        ru: {
            key: 'е',
            shiftKey: 'Е',
        },
    },
    KeyY: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'y',
            shiftKey: 'Y',
        },
        ru: {
            key: 'н',
            shiftKey: 'Н',
        },
    },
    KeyU: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'u',
            shiftKey: 'U',
        },
        ru: {
            key: 'г',
            shiftKey: 'Г',
        },
    },
    KeyI: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'i',
            shiftKey: 'I',
        },
        ru: {
            key: 'ш',
            shiftKey: 'Ш',
        },
    },
    KeyO: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'o',
            shiftKey: 'O',
        },
        ru: {
            key: 'щ',
            shiftKey: 'Щ',
        },
    },
    KeyP: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'p',
            shiftKey: 'P',
        },
        ru: {
            key: 'з',
            shiftKey: 'З',
        },
    },
    BracketLeft: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '[',
            shiftKey: '{',
        },
        ru: {
            key: 'х',
            shiftKey: 'Х',
        },
    },
    BracketRight: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: ']',
            shiftKey: '}',
        },
        ru: {
            key: 'ъ',
            shiftKey: 'Ъ',
        },
    },
    Backslash: {
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
        classes: [classes.special.delete],
        specName: 'DEL',
        en: {
            key: 'Delete',
        },
    },
    CapsLock: {
        classes: [classes.special.capsLock],
        specName: 'CapsLock',
        en: {
            key: 'CapsLock',
        },
    },
    KeyA: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'a',
            shiftKey: 'A',
        },
        ru: {
            key: 'ф',
            shiftKey: 'Ф',
        },
    },
    KeyS: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 's',
            shiftKey: 'S',
        },
        ru: {
            key: 'ы',
            shiftKey: 'Ы',
        },
    },

    KeyD: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'd',
            shiftKey: 'D',
        },
        ru: {
            key: 'в',
            shiftKey: 'В',
        },
    },
    KeyF: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'f',
            shiftKey: 'F',
        },
        ru: {
            key: 'а',
            shiftKey: 'А',
        },
    },

    KeyG: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'g',
            shiftKey: 'G',
        },
        ru: {
            key: 'п',
            shiftKey: 'П',
        },
    },
    KeyH: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'h',
            shiftKey: 'H',
        },
        ru: {
            key: 'р',
            shiftKey: 'Р',
        },
    },
    KeyJ: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'j',
            shiftKey: 'J',
        },
        ru: {
            key: 'о',
            shiftKey: 'О',
        },
    },
    KeyK: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'k',
            shiftKey: 'K',
        },
        ru: {
            key: 'л',
            shiftKey: 'Л',
        },
    },

    KeyL: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'l',
            shiftKey: 'L',
        },
        ru: {
            key: 'д',
            shiftKey: 'Д',
        },
    },

    Semicolon: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: ';',
            shiftKey: ':',
        },
        ru: {
            key: 'ж',
            shiftKey: 'Ж',
        },
    },

    Quote: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '\'',
            shiftKey: '"',
        },
        ru: {
            key: 'э',
            shiftKey: 'Э',
        },
    },
    Enter: {
        classes: [classes.common.long, classes.special.enter],
        specName: 'ENTER',
        en: {
            key: '\n',
        },
    },
    ShiftLeft: {
        classes: [classes.common.long, classes.special.leftShift],
        specName: 'Shift',
        en: {
            key: 'Shift',
        },
    },
    KeyZ: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'z',
            shiftKey: 'Z',
        },
        ru: {
            key: 'я',
            shiftKey: 'Я',
        },
    },
    KeyX: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'x',
            shiftKey: 'X',
        },
        ru: {
            key: 'ч',
            shiftKey: 'Ч',
        },
    },
    KeyC: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'c',
            shiftKey: 'C',
        },
        ru: {
            key: 'с',
            shiftKey: 'С',
        },
    },
    KeyV: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'v',
            shiftKey: 'V',
        },
        ru: {
            key: 'м',
            shiftKey: 'М',
        },
    },
    KeyB: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'b',
            shiftKey: 'B',
        },
        ru: {
            key: 'и',
            shiftKey: 'И',
        },
    },

    KeyN: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'n',
            shiftKey: 'N',
        },
        ru: {
            key: 'т',
            shiftKey: 'Т',
        },
    },
    KeyM: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: 'm',
            shiftKey: 'M',
        },
        ru: {
            key: 'ь',
            shiftKey: 'Ь',
        },
    },
    Comma: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: ',',
            shiftKey: '<',
        },
        ru: {
            key: 'б',
            shiftKey: 'Б',
        },
    },
    Period: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '.',
            shiftKey: '>',
        },
        ru: {
            key: 'ю',
            shiftKey: 'Ю',
        },
    },
    Slash: {
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
        classes: [classes.common.standart],
        specName: '↑', // \u2191
        en: {
            key: 'ArrowUp',
        },
    },
    ShiftRight: {
        classes: [classes.common.long, classes.special.rightShift],
        specName: 'Shift',
        en: {
            key: 'Shift',
        },
    },

    ControlLeft: {
        classes: [classes.common.medium, classes.special.ctrl],
        specName: 'Ctrl',
        en: {
            key: 'Control',
        },
    },
    MetaLeft: {
        classes: [classes.common.standart],
        specName: 'Win',
        en: {
            key: 'Meta',
        },
    },
    AltLeft: {
        classes: [classes.common.standart],
        specName: 'Alt',
        en: {
            key: 'Alt',
        },
    },
    Space: {
        classes: [classes.special.space],
        specName: '',
        en: {
            key: ' ',
        },
    },
    AltRight: {
        classes: [classes.common.standart],
        specName: 'Alt',
        en: {
            key: 'Alt',
        },
    },
    ControlRight: {
        classes: [classes.common.medium, classes.special.ctrl],
        specName: 'Ctrl',
        en: {
            key: 'Control',
        },
    },

    ArrowLeft: {
        classes: [classes.common.standart],
        specName: '←', // \u2190
        en: {
            key: 'ArrowLeft',
        },
    },
    ArrowDown: {
        classes: [classes.common.standart],
        specName: '↓', // \u2193
        en: {
            key: 'ArrowDown',
        },
    },

    ArrowRight: {
        classes: [classes.common.standart],
        specName: '→', // \u2192
        en: {
            key: 'ArrowRight',
        },
    },

    NumpadMultiply: {
        classes: [classes.common.standart],
        specName: '',
        en: {
            key: '*',
        },
    },
};

export default keys;
