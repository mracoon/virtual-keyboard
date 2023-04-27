/* const createRowLengthArray = (text) => {
  let sum = 0;
  return text.split('\n').map((el, i) => {
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL;
    return [el.length, sum];
  }); // rowLengths: [row length, sum]
};

export default createRowLengthArray;
 */

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

// console.log(splitRow('11111111112222222222333333333300', 10))

// console.log(text1.split('\n'))

const createRowLengthArray = (text, charInRow) => {
  let sum = 0;
  const allRows = text.split('\n');
  let res = [];
  if (Math.ceil(text.length / charInRow) > allRows.length) {
    for (let i = 0; i < allRows.length; i += 1) {
      res.push(splitRow(allRows[i], charInRow));
    }
  } else {
    res = [...allRows];
  }

  res = res.flat();
  return res.map((el, i) => {
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL;
    return [el.length, sum];
  }); // rowLengths: [row length, sum]
};

export default createRowLengthArray;
