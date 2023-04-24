const buildLayout = () => {
  const bodyElem = document.querySelector('body');
  const containerElem = document.createElement('div');

  const textFieldElem = document.createElement('textarea');
  const keyboardElem = document.createElement('div');
  containerElem.classList.add('container');
  textFieldElem.autofocus = true;
  // textField.cols = 20;
  textFieldElem.rows = 10;
  textFieldElem.value = '';

  containerElem.append(textFieldElem);

  keyboardElem.classList.add('keyboard__container');

  for (let i = 1; i < 6; i += 1) {
    const row = document.createElement('div');
    const rowID = `row-${i}`;
    row.classList.add(rowID, 'keyboard__row');
    row.id = rowID;
    keyboardElem.append(row);
  }

  containerElem.append(keyboardElem);

  bodyElem.append(containerElem);
};

export default buildLayout;
