let coords = [];

const blockHash = "0x93b6f00507e4d9254615e61ffb87d4c98e370938b3e2fc273457d314db6f8970";

let startButton = document.getElementById('start');

function text2Binary(string) {
  return string.split('').map(function (char) {
    return char.charCodeAt(0).toString(2);
  }).join('');
}




document.body.onmousemove = (event) => {
  if (coords.length > 199) {
    startButton.removeAttribute('disabled');
    return;
  };
  coords.push(event.clientX);
  coords.push(event.clientY);
}


startButton.onclick = () => {
  // console.log(coords);

  let coordsStr = coords.join('');
  // console.log(coordsStr);

  let hash = web3.sha3(blockHash + coordsStr);

  // console.log(hash);

  let binary = text2Binary(hash);

  // console.log(binary);

  let digit = String(BigInt(parseInt(binary, 2)));

  // console.log(digit);

  let separator = 4;

  let slicedNum = [];

  for (let i = 0; i < digit.length; i += separator) {
    slicedNum.push(digit.substr(i, separator));
  }

  // console.log(slicedNum);

  let norm = [];

  for (let j = 0; j < slicedNum.length; j++) {
    if (slicedNum[j] % 46 < 46) {
      norm.push(slicedNum[j] % 46);
    }
  }

  // console.log(norm);

  let moreThenZero = norm.filter((a) => a > 0);

  // console.log(moreThenZero);

  let unique = moreThenZero.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  // console.log(unique);

  unique.sort((a) => a != 0);

  unique.length = 6;

  console.log(unique);
}
