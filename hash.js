// if (typeof web3 !== 'undefined') {
// 	// Use Mist/MetaMask's provider
// 	web3js = new Web3(web3.currentProvider);
// } else {
// 	console.log('No web3? You should consider trying MetaMask!')
// 	// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
// 	web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:245"));
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

    numsArr.length = count;

    console.log(numsArr.sort((a, b) => a - b));
  });
}

// getRandom();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////




























let devideModule = (a, b) => {
  let rest = -a - (-a) % b;
  let devider = rest / b + 1;
  let trueRest = devider * b + a;

  return trueRest;
}


let arrP = [];
let arrQ = [];

let p = 19;


for (let i = 0; i < p; i++) {
  let y = i;
  for (let j = 0; j < p; j++) {
    let x = j;
    if ((y * y) % p == (x * x * x - 7 * x + 10) % p) {
      arrP.push([x, y]);
      arrQ.push([x, y]);
    }
  }
}

let isInt = (a) => a % 1 === 0;



let sum = (P, Q) => {
  let m;
  console.log(P);
  console.log(Q);

  if (P[0] == Q[0] && P[1] == Q[1]) {
    m = ((3 * (P[0] * P[0]) + (-7)) / (2 * P[1]));
    console.log('equal');
    console.log(m);
    if (!isInt(m)) m = Math.round(m);
  } else {
    ((P[1] - Q[1]) / (P[0] - Q[0])) < 0 ? m = ((P[1] - Q[1]) / (P[0] - Q[0]) % p + p) : m = ((P[1] - Q[1]) / (P[0] - Q[0])) % p;
    console.log('no equal');
    if (!isInt(m)) m = Math.round(m);
    // console.log(m);
    // console.log((P[1] - Q[1]) / (P[0] - Q[0]));
  }

  for (let i = 1; i <= p; i++) {
    if (i % p == Math.round(((P[1] - Q[1]) / (P[0] - Q[0]) % p + p)) % p) {
      console.log(i);
    }
  }

  console.log(((P[1] - Q[1]) / (P[0] - Q[0]) % p + p));
  console.log(Math.round(((P[1] - Q[1]) / (P[0] - Q[0]) % p + p)));


  let arrR = [];

  (m * m - P[0] - Q[0]) < 0 ? arrR[0] = (m * m - P[0] - Q[0]) % p + p : arrR[0] = (m * m - P[0] - Q[0]) % p;

  ((P[1] + m * (arrR[0] - P[0])) * (-1)) < 0 ? arrR[1] = ((P[1] + m * (arrR[0] - P[0])) * (-1)) % p + p : arrR[1] = ((P[1] + m * (arrR[0] - P[0])) * (-1)) % p;



  console.log(arrR);
}

console.log(arrP);

sum(arrP[17], arrQ[20]);
