const createRowLengthArray = (text) => {
  let sum = 0;
  return text.split('\n').map((el, i) => {
    let addNL = 1;
    if (i === 0) { addNL = 0; }
    sum += el.length + addNL;
    return [el.length, sum];
  }); // rowLengths: [row length, sum]
};

export default createRowLengthArray;
