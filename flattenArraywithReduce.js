let nestedArray = [1,2,3,['abc', '4534']];
console.log(nestedArray);

console.log(nestedArray.flat());

//const flatArray = nestedArray =>[].concat(...nestedArray);
//console.log(flatArray)


let nestedArray2 = [1,2,3,['abc', '4534']];

/*
if(typeof(nestedArray2) == "object"){
let flatarray2 = [].concat(...nestedArray2.map(x => typeof(x)=="object" ? [].concat(...nestedArray2) : flatarray2);
console.log(flatarray2);
}
*/

/*
if (typeof nestedArray2 == "object") {
  let flatArray2 = [].concat(...nestedArray2.map(x => typeof x == "object" ? [].concat(...x) : x));
  console.log(flatArray2);
}
*/

function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

if (Array.isArray(nestedArray2)) {
  let flatArray2 = flattenArray(nestedArray2);
  console.log(flatArray2);
}

//[].concat(...array.map(item => Array.isArray))