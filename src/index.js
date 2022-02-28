import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

/* class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and I am', this.age, 'years old.');
    }
}

const animal1 = new Animal('Simba', 3);
console.log(animal1);
animal1.speak();

class Lion extends Animal {
    constructor(name, age, furColour, speed) {
        super(name, age);
        this.furColour = furColour;
        this.speed = speed;
    }

    roar() {
        console.log('ROARRR! I have', this.furColour, 'fur and I can run', this.speed, 'miles an hour!');
    }
}

const lion1 = new Lion('Mufasa', 20, 'golden', 25);
console.log(lion1);
lion1.speak();
lion1.roar(); */