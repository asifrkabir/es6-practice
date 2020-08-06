// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function myFun(num){
//     return num*2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(5);
const sum = add(1,2);
const result2 = give5();
const result3 = doMath(7, 2);

console.log(result2);
console.log(sum);
console.log(result);
console.log(result3);