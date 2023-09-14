const buildTaskBar = () => {
  const body = document.querySelector('body');

  const taskBar = document.createElement('div');
  taskBar.classList.add('task-bar');

  const startBtn = document.createElement('div');
  startBtn.classList.add('start-btn');
  startBtn.textContent = 'start';

  const startMenu = document.createElement('div');
  startMenu.classList.add('start-menu');

  startBtn.append(startMenu);
  taskBar.append(startBtn);

  const windowsContainer = document.createElement('div');
  windowsContainer.classList.add('windows-container');

  const notepadTab = document.createElement('div');
  notepadTab.classList.add('notepad-tab');
  notepadTab.textContent = 'Notepad';
  windowsContainer.append(notepadTab);

  const lang = document.createElement('div');
  lang.classList.add('lang');
  windowsContainer.append(lang);
  taskBar.append(windowsContainer);

  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add('icons-container');

  const keyboardIcon = document.createElement('div');
  keyboardIcon.classList.add('keyboard-icon');

  iconsContainer.append(keyboardIcon);
  taskBar.append(iconsContainer);

  body.append(taskBar);
};

export default buildTaskBar;
