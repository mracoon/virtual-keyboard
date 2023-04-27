const buildInfoWindow = () => {
  const bodyElem = document.querySelector('body');

  const infContainer = document.createElement('div');
  infContainer.classList.add('inf-container');

  const infHeader = document.createElement('h3');
  infHeader.classList.add('inf__header');
  infHeader.textContent = 'Available hotkeys:';
  infContainer.append(infHeader);

  const hotkeysList = document.createElement('h3');
  hotkeysList.classList.add('hotkeys-list');

  const hKeys = [['Ctrl + C', ' - copy text'],
    ['Ctrl + V', ' - paste copied text'],
    ['Ctrl + X', ' - cut text'],
    ['Ctrl + A', ' - select all text'],
    ['Left Ctrl + Left Alt', ' - switch language']];

  hKeys.forEach((item) => {
    const [hotkeyVal, descriptionVal] = item;
    const listItem = document.createElement('li');
    const hotkey = document.createElement('span');
    hotkey.textContent = hotkeyVal;
    hotkey.classList.add('hotkey');
    listItem.append(hotkey);
    // listItem.textContent = description
    const descr = document.createElement('span');
    descr.textContent = descriptionVal;
    descr.classList.add('description');
    listItem.append(descr);
    hotkeysList.append(listItem);
  });

  infContainer.append(hotkeysList);

  const OSInfo = document.createElement('p');
  OSInfo.textContent = 'Keyboard created in Windows system';
  OSInfo.classList.add('inf__text');
  infContainer.append(OSInfo);

  bodyElem.append(infContainer);
};

export default buildInfoWindow;
