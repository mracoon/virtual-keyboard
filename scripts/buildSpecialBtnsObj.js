const buildSpecialBtnsObj = () => {
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
};

export default buildSpecialBtnsObj;
