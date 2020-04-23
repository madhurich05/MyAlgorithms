// Google
function addANumberToArray(a) {
      let aNum = Number(a.join('')) + 1;
      let result = Array.from(aNum.toString()).map(Number);
return result;
}

