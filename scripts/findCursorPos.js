const findCursorPos = (rowLengths, cursorPos) => rowLengths.findIndex((el) => el[1] >= cursorPos);

export default findCursorPos;
