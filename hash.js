// if (typeof web3 !== 'undefined') {
// 	// Use Mist/MetaMask's provider
// 	web3js = new Web3(web3.currentProvider);
// } else {
// 	console.log('No web3? You should consider trying MetaMask!')
// 	// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
// 	web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }

// const blockHash = "0x93b6f00507e4d9254615e61ffb87d4c98e370938b3e2fc273457d314db6f8970";

// function text2Binary(string) {
// 	return string.split('').map(function (char) {
// 		return char.charCodeAt(0).toString(2);
// 	}).join('');
// }

// let now = new Date();

// let today = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} | ${now.getDate()} : ${now.getMonth() + 1} : ${now.getFullYear()}`;

// let binary = text2Binary(web3js.sha3(blockHash + today));

// console.log(web3js.sha3(blockHash + today));

// console.log(binary);

// var digit = String(BigInt(parseInt(binary, 2)));

// console.log(digit);

// let separator = 4;

// let slicedNum = [];

// for (let i = 0; i < digit.length; i += separator) {
// 	slicedNum.push(digit.substr(i, separator));
// }

// console.log(slicedNum);

// let norm = [];

// for (let j = 0; j < slicedNum.length; j++) {
// 	if (slicedNum[j] % 46 < 46) {
// 		norm.push(slicedNum[j] % 46);
// 	}
// }

// console.log(norm);

// let moreThenZero = norm.filter((a) => a > 0);

// console.log(moreThenZero);

// var unique = moreThenZero.filter(function (elem, index, self) {
// 	return index === self.indexOf(elem);
// });

// console.log(unique);

// unique.sort((a) => a != 0);

// unique.length = 6;

// console.log(unique);

// 16 = 27 - 21 + 10


let randomsNumsArr = [];

let getRandomArr = (arr) => {
  console.log(arr);
  return arr;
}

let getRandom = () => {
  let min = 1;
  let max = 45;
  let count = 6;
  let numsArr = [];


  let URL = `http://www.random.org/sequences/?min=${min}&max=${max}&col=1&format=plain&rnd=new`;

  let request = new Request(URL);

  fetch(request).then(function (response) {
    return response.text();
  }).then(function (text) {
    let newText = text.replace(/[\n\r]/g, ' ').replace(/\s{2,}/g, ' ');
    numsArr = newText.split(' ');
    for (let i = 0; i < numsArr.length; i++) { numsArr[i] = +numsArr[i]; }

    console.log(numsArr);

    numsArr.length = count;

    randomsNumsArr = getRandomArr(numsArr);
  });
}

// getRandom();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrP = [];
let arrQ = [];

let p = 127;


for (let i = 0; i < p; i++) {
  let y = i;
  for (let j = 0; j < p; j++) {
    let x = j;
    if ((y * y) % 7 == (x * x * x - 7 * x + 10) % 7) {
      arrP.push([x, y]);
    }
  }
}

console.log(arrP);


for (let i = 0; i < p; i++) {
  let y = i;
  for (let j = 0; j < p; j++) {
    let x = j;
    if ((y * y) % 7 == (x * x * x - 7 * x + 10) % 7) {
      arrQ.push([x, y]);
    }
  }
}


console.log(arrP[1409]);
console.log(arrQ[1409]);


let m = (arrP[0][1] - arrQ[0][1]) / (arrP[0][0] - arrQ[0][0]);

let mEqual = ((3 * (arrP[1409][0] * arrP[1409][0]) + (-7)) / (2 * arrP[1409][1]));


console.log(mEqual);


let arrR = [];

arrR[0] = [];

arrR[0][0] = mEqual * mEqual - arrP[1409][0] - arrQ[1409][0];

arrR[0][1] = (arrP[1409][1] + mEqual * (arrR[0][0] - arrP[1409][0])) * (-1);

console.log(arrR);
