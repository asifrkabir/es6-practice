class Parent{
    constructor() {
        this.fatherName = "Schwarzneggar";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }

    getFulName(){
        return this.name + " " + this.fatherName
    }
}

const baby1 = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby1);
console.log(baby2);
console.log(baby1.getFulName());