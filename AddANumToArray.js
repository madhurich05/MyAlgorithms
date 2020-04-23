// Google
function addANumberToArray(a) {
      let carry = 0;
      let aNum = Number(a.join(''));
      let result = Array.from(aNum.toString()).map(Number);
return result;
}

