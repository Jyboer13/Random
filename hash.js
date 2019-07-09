if (typeof web3 !== 'undefined') {
	// Use Mist/MetaMask's provider
	web3js = new Web3(web3.currentProvider);
} else {
	console.log('No web3? You should consider trying MetaMask!')
	// fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
	web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const blockHash = "0x93b6f00507e4d9254615e61ffb87d4c98e370938b3e2fc273457d314db6f8970";

function text2Binary(string) {
	return string.split('').map(function (char) {
			return char.charCodeAt(0).toString(2);
	}).join('');
}

let now = new Date();

let today = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} | ${now.getDate()} : ${now.getMonth() + 1} : ${now.getFullYear()}`;

let binary = text2Binary(web3js.sha3(blockHash + today) );

console.log(web3js.sha3(blockHash + today));


console.log(binary);


var digit = String(BigInt(parseInt(binary, 2)));

console.log(digit);


let separator = 4;

let slicedNum = [];

for (let i = 0; i < digit.length; i+=separator) {
	slicedNum.push(digit.substr(i, separator));
}

console.log(slicedNum);

let norm = [];

for (let j = 0; j < slicedNum.length; j++) {
	if (slicedNum[j] % 45 < 45) {
		norm.push(slicedNum[j] % 45);
	}
}

console.log(norm);

let arr = [];

for (let k = 0; k < norm.length; k++) {
	if(norm[k] <= 45) arr.push(norm[k]);
}

console.log(arr);

arr.length = 6;

console.log(arr);
