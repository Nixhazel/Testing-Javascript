// const firstname = "John";
// console.log(firstname);

// const hasUniqueChars = (s) => {
// 	let obj = {};
// 	for (let i = 0; i < s.length; i++) {
// 		let char = s[i];
// 		if (!obj[char]) {
// 			obj[char] = 1;
// 		} else {
// 			obj[char]++;
// 		}
// 	}
// 	let counter = Object.values(obj);
// 	let check = counter.every((num) => num == 1);
// 	return check;
// };

// const withdraw = (amount) => {
// 	let newArray = [0, 0, 0];
// 	let hCount = 0;
// 	let fifCount = 0;
// 	let twcount = 0;

// 	if (amount % 100 === 0) {
// 		hCount++;
// 	} else if (amount % 50 === 0) {
// 		fifCount++;
// 	} else if (amount % 20 === 0) {
// 		twcount++;
// 	} else {
// 	}

// 	newArray.push(hCount);
// 	newArray.push(fifCount);
// 	newArray.push(twcount);
// 	console.log(newArray);
// 	return newArray;
// };

// console.log(withdraw(230));

// console.log("good");
// console.log();

// function Circle(weight){
//     this.weight = 1;
//     this.draw = function () {
//         console.log("draw");
//     };
// }

// const circle = new Circle(1);
// console.log(circle.draw);
// const numberToOrdinal = (number) => {
// 	let strnum = number.toString();
// 	let strlent = strnum.length;
// 	let st = "st";
// 	let nd = "nd";
// 	let th = "th";
// 	//   console.log(strnum[0])
// 	if (number == 0) {
// 		return strnum;
// 	} else if (number == 1 || strnum[strlent - 1] == 1 || strnum[strlent-1] >= 1 && strnum[strlent-2] == 1) {
// 		return strnum + st;
// 	} else if (number > 3 && number < 21 ) {
// 		return strnum + th;
//     } else if (strnum[strlent - 1] == 2) {
//         console.log(typeof strnum + nd);
//         return strnum + nd;
//         console.log(typeof strnum + nd);
//     }
    
// 	//   return "";
// 	//   || strnum[strlent-1] >= 1 && strnum[strlent-2] == 1
// };
// console.log(numberToOrdinal(2));



// let arr = [1, 3, 4, 5, 6, 7,];
// let arr2 = [8,9,10,11,12,13]

// console.log([...arr, ...arr2]);




// passenger assignment

// const task = (passenger, shuffle) => {
//     if (passenger > 50) return "end";

//     let location
    


// };
// let obj = {
//     arr1: [],
//     arr2: [],
//     count: 0
// };
// let obj = {};
// let arr1 = [];
// obj.arr1 = [];
// obj.arr2 = [];
// let pass = 10;

// arr1[0] = {};
// arr1[1] = {};
// arr1[0].name = "hello";
// arr1[0].loca = "hello";
// arr1[1].name = "you";
// arr1[1].loca = "know";
// for (let i = 0; i <= pass; i++){
//     obj.arr1[i] = {};
//     obj.arr1[i].name = `pass${i}`;
//     obj.arr1[i].loca = "hello";
// }

// obj
// class Pass {
// 	constructor(name, loca) {
// 		this.name = name;
// 		this.loca = loca;
// 	}
// }

// let p = 5;
// let a = ['b', 'c', 'd', 'e'];
// let acount = 0;
// obj.arr1.push({});
// obj.arr1[0].name = "go";

// for (let i = 0; i <= 2; i++){
//     if (acount <= a.length) {
//         let j = 0;
//        let arr1[j].name = `passengers${i}`;
//         arr1[j].loca = a[acount];
//         j++; 
//         acount++;
//     }
// }
// console.log(arr1);

// const autocorrect = (text) => {
// 	let yourclient = "your client";

// 	let arraytext = text.split("");

// 	let fullstop = arraytext.filter((e) => {
// 		return e === ".";
// 	});
// 	arraytext.pop(fullstop[0]);

// 	let newtext = arraytext.join("").split(" ");

// console.log(newtext);

// 	let indexofyou = newtext.indexOf("you");
// 	let indexofyouuuu = newtext.indexOf("youuuu");
// 	if (indexofyou && indexofyouuuu) {
// 		newtext[indexofyou] = yourclient;
// 		newtext[indexofyouuuu] = yourclient;

// 		let result = newtext.join(" ");
// 		return result+".";
// 	}
// };

// console.log(autocorrect("Our team is excited to finish this with you."));

// const arrayPacking = (a) => {
// 	let s = "";
// 	for (let i = 0; i < a.length; ++i) {
// 		let st = a[a.length - 1 - i].toString(2);
// 		while (st.length < 8) st = 0 + st;
// 		s += st;
// 	}
// 	return parseInt(s, 2);
// };
// console.log(arrayPacking([24, 85, 0]));

// let x = [];
// x.push({ id: 5 });
// console.log(x);
// x.push({ id: 5 });
// console.log(x);

// x.push({ id: x[0].id + x[1].id });
// console.log(x);


// const measureKelvin = () => {
// const measurement = {
// type: 'temp',
// unit: 'celsius',
// value: prompt(`Degrees celsius:`),
// };
// console.log(measurement.value);
// const kelvin = Number(measurement.value) + 273;
// return kelvin;
// };
// console.log(measureKelvin());



// for (let i = 7; i < 8; i--) {

// 	console.log(`i is ${i}`);
	
// }

// const d = (a, b) => {
// 	let narr = a.split("");
// 		let narr1 = narr.shift();
// 		let narr2 = narr.shift();
// 	let aarr = a.split("");
// 	let barr = b.split("");
// 	let aarr1 = aarr.shift();
// 	let aarr2 = aarr.shift();
// 	let c = 0;
	
	
	
	
// 	for (let i = 0; i < b.length; i++){
// 		let warr = narr;
// 		console.log(warr);
// 		let x = i + 1;
// 		if (warr.join("") === barr.join("")) {
// 			return c;
// 		} else {
// 			warr.splice(x, 0, aarr1, aarr2);

// 			warr = narr;
// 			console.log(warr, narr);
// 			c++;
// 		}


// 	}
	
// 	return c;
// };

// console.log(d("eecoff", "coffee"));

// MONDAY ASSESMENT
// Background
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// DNA is created by two strands of nucleotides that are bonded together in complementary pairs. For each base on one side, there is an opposite base on the other side. There are 4 symbols used to represent the bases, A, T, C, and G.

// Symbols A and T are complements of each other, as are C and G.

// Task
// You have function with one side of the DNA, you need to get the other complementary side. The DNA strand may be empty if there is no DNA at all. In this case, you can simple return the empty string.

// Specification
// dnaComplement(dna)
// Parameters
// dna: String - DNA strand

// Return Value
// String - A new string generated by returning the complement of the input strand.

// Constraints
// It will always be a string, but it might be empty.

// It will never be null/nil or undefined.

// Examples
// dna	Return Value
// "A"	"T"
// "T"	"A"
// "C"	"G"
// "G"	"C"
// "ATTGC"	"TAACG"
// ""	""

// const dnaComplement = (dna) => {
// 	if (!dna == "") {
// 		let dnaArr = dna.split("");
// 		let resArr = [];
// 		for (let str of dnaArr) {
// 			if (str === "A") resArr.push("T");
// 			if (str === "T") resArr.push("A");
// 			if (str === "C") resArr.push("G");
// 			if (str === "G") resArr.push("C");
// 		}
// 		return resArr.join("");
// 	}

// 	return "";
// };

// dnaComplement("T");

const people = [
	"JoHn",
	"ChrISTiana",
	"anThoNY",
	"MARia",
	"jaMeS",
	"MIChaEl",
	"jeNNIFeR",
];
// const result = [];
// let result2 = [];
// const refactor = (names) => {
// 	for (let i = 0; i < names.length; i++) {
// 		let nameArray = names[i].split("");
// 		for (let j = 0; j < nameArray.length; j++) {
// 			if (j === 0) {
// 				if (nameArray[j] != nameArray[j].toUpperCase()) {
// 					const new1 = nameArray[j].toUpperCase();
// 					result2.push(new1);
// 				} else {
// 					result2.push(nameArray[j]);
// 				}
// 			} else {
// 				result2.push(nameArray[j].toLowerCase());
// 			}
// 		}
// 		result.push(result2.join(""));
// 		result2 = [];
// 	}

// 	console.log(result);
// };

// const bigDaddy = (people, callback) => {
//     callback(people);
// };
// refactor(people);

// const results = [];
// let results2 = [];
// const refactor2 = (names) => {
// 	for (let name of names) {
//         let nameArray = name.split("");

// 		for (let nameA of nameArray) {
// 			if (nameArray.indexOf(nameA) === 0) {
//                 nameA != nameA.toUpperCase() ? results2.push(nameA.toUpperCase()) : results2.push(nameA)
// 			} else {
// 				results2.push(nameA.toLowerCase());
// 			}
// 		}
// 		results.push(results2.join(""));
// 		results2 = [];
// 	}

// 	console.log(results);
// };

// const bigDaddy2 = (people, callback) => {
// 	callback(people);
// };
// // refactor2(people);

// bigDaddy2(people, refactor2);

const results = [];
let results2 = [];
const refactor2 = (names) => {
	names.forEach((e, i) => {
		let err = e.split("");
		err.forEach((f, g) => {
			if (err.indexOf(f) === 0) {
				f !== f.toUpperCase()
					? results2.push(f.toUpperCase())
					: results2.push(f);
			} else {
				results2.push(f.toLowerCase());
			}
		});
		results.push(results2.join(""));
		results2 = [];
	});
};

const bigDaddy2 = (people, callback) => {
	callback(people);
};
// refactor2(people);

bigDaddy2(people, refactor2);

console.log(results);