import createRowLengthArray from './createRowLengthArray.js';
import findCursorPos from './findCursorPos.js';

const upDownNavHandler = (startCursorPos, text, dir = 'down') => {
  const rowLengths = createRowLengthArray(text, true);
  const curCursorRow = findCursorPos(rowLengths, startCursorPos);
  let newCursorPos = startCursorPos;
  const totalRows = rowLengths.length;

  const prevRow = curCursorRow > 0 ? rowLengths[curCursorRow - 1] : [-1, -1];
  const [prevRowLength, prevSum] = prevRow;

  const nextRow = curCursorRow < totalRows - 1 ? rowLengths[curCursorRow + 1] : [0, startCursorPos];
  const [nextRowLength, nextSum] = nextRow;

  const charFromBeginingRow = (startCursorPos - prevSum) - 1;

  switch (dir) {
    case 'up':
      if (prevRowLength <= charFromBeginingRow) {
        newCursorPos = curCursorRow > 0 ? prevSum : startCursorPos;
        // запрещает переход с верхней строки
      } else {
        newCursorPos -= (prevRowLength + 1);
      }
      break;
    default: // down
      if (nextRowLength <= charFromBeginingRow) {
        newCursorPos = nextSum;// nextRow[1]
      } else {
        newCursorPos = charFromBeginingRow + rowLengths[curCursorRow][1] + 1; // standart
      }
      break;
  }
  return newCursorPos;
};

export default upDownNavHandler;
