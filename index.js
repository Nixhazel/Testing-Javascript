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



for (let i = 7; i < 8; i--) {
	console.log(`i is ${i}`);
}
