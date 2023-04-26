import buildTaskBar from './buildTaskBar.js';

const buildLayout = () => {
  const bodyElem = document.querySelector('body');
  const containerElem = document.createElement('div');

  // *******************notepad start****************
  const notepad = document.createElement('div');
  notepad.classList.add('notepad');
  // --------------notepadHeader start------------------
  const notepadHeader = document.createElement('div');
  notepadHeader.classList.add('notepad__header');
  notepadHeader.textContent = 'Untitled - Notepad';
  // --------------notepadBtns start------------------
  const notepadBtnsContainer = document.createElement('div');
  notepadBtnsContainer.classList.add('notepad__btns-container');

  const notepadBtns = [['minimize', '🗕'], ['maximize', '🗖'], ['close', '🗙']];

  notepadBtns.forEach((el) => {
    const [btnClass, content] = el;
    const notepadBtn = document.createElement('div');
    notepadBtn.classList.add('notepad__btn', btnClass);
    notepadBtn.textContent = content;
    notepadBtnsContainer.append(notepadBtn);
  });
  // --------------notepadBtns end------------------

  notepadHeader.append(notepadBtnsContainer);
  notepad.append(notepadHeader);
  // -----------------notepadHeader end------------------------------

  // ----------------------notepadMenu start--------------------------------------
  const notepadMenu = document.createElement('div');
  notepadMenu.classList.add('notepad__menu');
  // -------------------menu-list start--------------------
  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');

  const notepadMenuItems = ['File', 'Edit', 'Format', 'View', 'Help'];

  notepadMenuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');
    menuItem.textContent = item;
    menuList.append(menuItem);
  });

  // -------------------menu-list end--------------------
  notepadMenu.append(menuList);
  notepad.append(notepadMenu);
  // -----------------notepadMenu end--------------------
  // --------------------textarea start-------------------------
  const textFieldElem = document.createElement('textarea');
  textFieldElem.classList.add('textarea');

  textFieldElem.autofocus = true;
  // textField.cols = 20;
  textFieldElem.rows = 10;
  textFieldElem.value = '';

  notepad.append(textFieldElem);
  // --------------------textarea end-------------------------

  containerElem.append(notepad);
  // ********************notepad end********************
  // **********************keyboard start*******************************
  const keyboardElem = document.createElement('div');
  containerElem.classList.add('container');

  keyboardElem.classList.add('keyboard__container');

  for (let i = 1; i < 6; i += 1) {
    const row = document.createElement('div');
    const rowID = `row-${i}`;
    row.classList.add(rowID, 'keyboard__row');
    row.id = rowID;
    keyboardElem.append(row);
  }

  containerElem.append(keyboardElem);
  // **********************keyboard end*******************************
  bodyElem.append(containerElem);
  buildTaskBar();
};

export default buildLayout;
