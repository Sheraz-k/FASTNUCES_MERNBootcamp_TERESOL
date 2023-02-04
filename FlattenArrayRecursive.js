/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 * // 7. flatten the array flatten ([1,2,3,['abc', '4534']]) --> result = [1,2,3,'abc','4534']
 */

nestedArray = [1,2,3,['abc', '4534']];
console.log(nestedArray);

function flattenArray(arr) {
    let result = []
    console.log("\nI am result"+ result)

    for (let element of arr) {
        if (typeof (element) == "object") {
            let partial = flattenArray(element);
            console.log("partial"+partial)
            partial.forEach(value => {
                result.push(value)
            });
        }
        else result.push(element);
    }
    return result;
}

console.log(flattenArray([1, 34, [[45], [65, 89]]]))