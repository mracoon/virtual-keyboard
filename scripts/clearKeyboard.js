const clearKeyboard = () => {
  const kbRows = document.querySelectorAll('.keyboard__row');
  kbRows.forEach((el) => { const row = el; row.innerHTML = ''; });
};

export default clearKeyboard;
