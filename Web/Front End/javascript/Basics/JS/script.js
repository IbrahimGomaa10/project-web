/*
...... Comparing two JavaScript objects always returns false.
...... substring() => can't accept negative


* */



// let str = "Hello From Js";

// console.log(str.length)
// console.log(str.slice(-7, 5))
// console.log(str.concat(" ", "PHP", " ", "Python"))
// console.log(str.padStart(4, 0))
// console.log(str.split(" "))

// let header = "My Favourite Programming Language.."
// let theLanguage = ["JavaScript", "PHP", "Python"]

// let content = `<h2>${header}</h2>
// `
// console.log(content)

// let arr = [1, 2, 5, 7, 3];
// let len = arr.length;
// let max = -Infinity;

// while(len--) {
//   if (arr[len] > max) {
//     max = arr[len]
//   }
// }
// console.log(`The first solution is ${max}`)

// ////////////! solution 2

// let arr2 = [1, 2, 5, 7, 3];
// let max2 = arr2[0];
// for(i = 1; i < arr2.length; i++) {
//   if (max2 < arr2[i]) {
//     max2 = arr2[i]
//   }
// }
// console.log(max2)

// ex 2

// let number = 0;
// console.log(number++)
// console.log(++number)
// console.log(++number)
// console.log(number++)
// console.log(++number)

//* BY programming tech

// let convText = "iBraHiM";
// let textArr = convText.split("");
// let newArr = [];
// for(let i = 0; i < textArr.length; i++) {
//   if (textArr[i] === textArr[i].toUpperCase()) {
//     newArr.push(textArr[i].toLowerCase())
//   } else {
//     newArr.push(textArr[i].toUpperCase())
//   }
// }
// console.log(newArr)

//* By map function

// let resArr = textArr.map(function(ele){
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// });

// console.log(resArr)



// let numbers = [1, -100, 200, 50, -25, 30, 10];
// let newArr = []

//*By Programming techs

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < 0 || numbers[i] > 0) {
//     let multNumbers = numbers[i] * -1;
//     newArr.push(multNumbers)
//   } 
// }
// console.log(newArr)


//* By Map Function
// let convNumbers = numbers.map(function(ele){
//   return -ele;
// })
// console.log(convNumbers)

//* 

//* Assignment

// let userName = "Elzero";
// let result = userName.charAt(0).toLowerCase().repeat(3);
// console.log(result)

//* Assignment answer
// function checkStatus(a, b, c) {
  
//   if (typeof a === "string" && typeof b === "number" && typeof c === "boolean") {
//     if (c == true) {
//       console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) 
//     } else {
//       console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`)
//     }
//   }

//   if (typeof a === "number" && typeof b === "string" && typeof c === "boolean") {
//     if (c == true) {
//       console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`) 
//     } else {
//       console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`) 
//     }
//   }

//   if (typeof a === "boolean" && typeof b === "number" && typeof c === "string") {
//     if (a == true) {
//       console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`) 
//     } else {
//       console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`) 
//     }
//   }
// }
// checkStatus("Ibrahim", 22, false);
/*
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] == target) {
      var output = [];
      var res = output.push(i, i + 1);
      return res
    }
  }
};
console.log(twoSum([2,7,11,15], 9))
*/

//! codewars ex 

// function countPositivesSumNegatives(input) {
//   let posCount = 0;
//   let negSum = 0;
//   let res = [];
//   if(input.length === null || input.length == 0) {
//     return res;
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       if(input[i] > 0) {
//         posCount++;
//       }
//       if(input[i] < 0) {
//         negSum += input[i];
//       }
//     }
//     res.push(posCount, negSum)
//     return res;
//   }
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


//?****************************************** */

// let summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

// console.log(summation(8));

//?**********************************************/

// function noSpace(x) {
//   let res = [];
//   let strToArr = x.split("")
  
//   for(i = 0; i < strToArr.length; i++) {
//     if(strToArr[i] === " ") {
//       continue;
//     } else {
//       res.push(strToArr[i])
//     }
//   }
//   let arrToStr = res.join("")
//   return arrToStr;
// }

// console.log(noSpace("kxnc kdn vkn dj kvl"))


//?**************************************************/

// function toJadenCase(str) {

//   let strToArr = str.split(" ")
//   res = [];
//   for(i = 0; i < strToArr.length; i++) {
//     let firstCapitalized = strToArr[i].slice(0, 1).toUpperCase() + strToArr[i].slice(1).toLowerCase() 
//     res.push(firstCapitalized)
//   }
//   let arrToStr = res.join(" ")
//   return arrToStr
// };

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

//?************************************ */


// function addSquare(a, b) {
//   return square(a) + square(b);
// }

// console.log(addSquare(2, 3))

// function square(x) {
//   return x ** 2;
// }


// function addSquare(a, b) {
//   function square(x) {
//     return x ** 2;
//   }
//   return square(a) + square(b);
// }

// console.log(addSquare(2, 3))

//?*****************************************/

// function howManydays(month){
//   var days;
//   switch (month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     case 2:
//       days = 28;
//       break;
//   }
//   return days;
// }

// res = howManydays(2)
// console.log(res)

//?*********************************/

// let nums = [1, 2, 4, 5, 10, 7, 12]

// let res = nums.filter(function(ele){
//   return ele % 2 === 0;
// }).map(function(ele) {
//   return ele * ele;
// })

// console.log(res);

//?***************************************/

// let sentense = "I love Foood code too playing much"

// let filtering = sentense.split(" ").filter(function(ele){
//   return ele.length <= 4;
// }).join(" ")

// console.log(filtering)

//?**************************************/

// let ignoreNumbers = "H123i45m7a";

// let ignore = ignoreNumbers.split("").filter(function(ele){
//   return isNaN(ele) === true;
// }).join("")

// console.log(ignore);


//?*******************************/

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let res = mix.map(function(ele){
//   return isNaN(ele) ? ele : " ";
// }).reduce(function(acc, ele){
//   return `${acc}${ele}`
// });
// console.log(res)


// let myString = "EElllzzzzzzzeroo";

// let resFiltering = myString.split("").filter((ele, inx, arr)=> {
//   return arr.indexOf(ele) === inx;
// }).join("")
// console.log(resFiltering);


// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let flattingArr = myArray.reduce(function(acc, ele){
//   return [].concat(acc, ...ele)
// })

// console.log(flattingArr);

//! second solution

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let flattingArr = myArray.reduce(function(acc, ele){
//   return acc.concat(...ele)
// })

// console.log(flattingArr);

//! Third solution 

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let flattingArr = myArray.reduce(function(acc, ele){
//   return acc.concat(ele)
// }, [])
// console.log(flattingArr);

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let filteringStr = numsAndStrings.filter(function(ele){
//   return !isNaN(ele)
// }).map(function(ele){
//   return - ele;
// })
// console.log(filteringStr);


// let nums = [2, 12, 11, 5, 10, 1, 99];

// let reducingEvenOdd = nums.reduce(function(acc, ele){
//   console.log(acc);
//   return ele % 2 == 0 ? ele * acc : ele + acc;
// }, 1)

// console.log(reducingEvenOdd);

//**************Last function challenge************** */

//! Object

// member = {
//   name: 'Elzero',
//   age: 38,
//   country: "Egypt",
//   fullDetails: function(){
//     return `My name is ${member.name}, My Age is ${member.age}, I live in ${member.country}`; 
//   }
// }

// console.log(member.fullDetails());

//?*******************************************/

