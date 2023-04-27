const addAdditionalKey = (
  keysData,
  btnId,
  language,
  btn,
  ShiftLeft = false,
  ShiftRight = false,
) => {
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
};

export default addAdditionalKey;
