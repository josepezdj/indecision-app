class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi. My name is ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
};

const me = new Person("Jose G.", 44);
console.log(me.greet())
console.log(me.getDescription())