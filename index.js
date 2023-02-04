console.log("Hello, World!");


// TEAT AS A LIBRARY
//evry feature - functionlity will wrapped in a function
// arrow function - function expression
// use suitable loops (for..of, for..in)
// 1. array print
// 2. find multiples in array calculate Multiples (array,3,7,9 etc...)
// 3. Calculate max /return max and min count like 3,4,5 etc
// 4. Calculate min
// 5. count no of even and odds
// 6. check if element is present in an array - find(array, element_to_be_searched)
// 7. flatten the array flatten ([1,2,3,['abc', '4534']]) --> result = [1,2,3,'abc','4534']
// 8. return index where an element occured /where this element find like 2,3,6 etc

// Additional:- print resultant arrays for 2, 7 by calling function written in 1.

// display(Array){
//     for value of Array
// }

// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
//   ];

//   console.log(materials.map(material => material.length));

// let display = (input_arr)=>{
//     for (let value of input_arr){
//         console.log(value)
//     }
// };

// display([1,2,3,4,'abc'])

// For each
// let arr = [1,2,3,4,'abc']
// arr.forEach()

// for each
// let consice_display = input_arr => input_arr.forEach(element => {
// });

// const array1 = [1, 3, 2];
// console.log(Math.max(...array1));

// return max num by using arrow function
// let maxValue = (arr) => {
//   let max = arr[0];
//         // let max = 0;
//         //[4,5,66,77,8,100] max=100
//   arr.forEach((element) => {
//     if (element > max) {
//       max = element;
//         //   (temp<value) ? temp = value : temp = temp
//     }
//   });
//         //   console.log(max);
//   return max
// };
// maxValue([4, 5, 66, 77, 8, 100, 6]);


// return max num by using arrow function
// let minValue = (minArr) => {
//   let min = minArr[0];
//   minArr.forEach((element) => {
//     if (min > element) {
//       min = element;
//     }
//   });
//   console.log(min);
// };
// minValue([40, 4, 5, 66, 77, -6, 8, 100]);


// find multiples in array calculate Multiples (array,3,7,9 etc...)
// let mulVal = (mulArr) =>{
//     let value = mulArr[0];
//     mulArr.forEach(element => {
//         if(value % element) {
//             value = element;
//         }
//     });
//     console.log (value)
// };
// mulVal([40, 4, 5, 66, 77, -6, 8, 100])


let findMultiples = (input_arr, factor) =>{
    let result = []
    input_arr.forEach(value => {
        // (value % factor == 0) ? true : false
        (value % factor == 0) ? result.push(value) : null
    });
    return console.log(result);
    
    

}
let abc = [1,2,3,4,4,5,5,6,6]
findMultiples (abc,3)
