// const person = {name: "Jack William", age: 17, job: 'Facebooker', gfName: "Emma Watson", address: "Kochu Khet", phone: "01717171747", friends: ["Tom", "Sam", "John"]};

// const { phone, name, address } = person;
// // const name = person.name;
// // const phone = person.phone;

// console.log(name);
// console.log(phone);
// console.log(address);


// const friends = ["A", "B", "C", "D"];
// const [first, second, ...rest] = friends;

// console.log(first, second, rest);

const complexObject = {
    name: "abc",
    info: {
         address: 'kola bagan',
         leader: 'tiger'
    }
}

const {leader} = complexObject.info;

console.log(leader);