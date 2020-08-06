const wifey = "Maisha";
console.log(wifey); 

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// numbers = ['A', 'B', 'C']; not allowed for const

let patientName = "Rahim";
patientName = "Rahima";
console.log(patientName);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// i remains inside the for loop here

// for (var i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// i leaks outside the for loop here