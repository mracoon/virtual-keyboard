function splitRow(row1, numChars, res = []) {
  res.push(row1.slice(0, numChars));
  const row = row1.slice(numChars);
  if (row.length > numChars) {
    splitRow(row, numChars, res);
  } else if (row) {
    res.push(row);
  }
  return res;
}

const createRowLengthArray = (text1, charInRow) => {
  const rows = [];
  text1.split('\n').forEach((row) => {
    rows.push(splitRow(row, charInRow, []).join('\n'));
  });
  const text = rows.join('\n');
  let sum = 0;
  return text.split('\n').map((el, i) => {
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL;
    return [el.length, sum];
  }); // rowLengths: [row length, sum]
};

export default createRowLengthArray;
