// Object methods and "this"

//We can assign methods to an object by defining properties that are functions:

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {    console.log('hello, my name is ' + this.name)  },}

arto.greet() // "hello, my name is Arto Hellas" gets printed

/*Classes

As mentioned previously, there is no class mechanism in JavaScript 
like the ones in object-oriented programming languages. There are, 
however, features to make "simulating" object-oriented classes possible.*/

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()


