
/*

classess and ojects 
//concepts in OOP

astractoion
encapsulation 
inheritance
polymorphism(overloading vs overriding)
constructors
oop advantages & disadvantages


.....


session (duration or activity etween login and logout of any application )

session management

singelton 

sandoxing 

*/


//lets create a simple class

class User {
    constructor(name){
        this.name = name;
    }
    sayhello(){
        console.log("Hello")
        console.log(this.name);
    }

}

//using this class now

let user = new User("Sheraz");

user.sayhello();

user.name = "Saad";//to change value without any condition

user.sayhello()

console.log(typeof(User)); //function

//we use getter and setter for updating values in class methods and 0


//Loosing this Prolem


class TestLoosingThis {
    constructor(value){

        this.value = value;

    }

    click(){
        console.log("Check TestThis Class Click Method this.value outut:" + this.value);
    }
}

let testThis = new TestLoosingThis("sumama");
testThis.click();//outpt is ok as sumama
setTimeout(testThis.click, 1000);//output is undefinced //Inside any other function scope eg in the scope of the setTimeout the keyword "this" will lose its refernce and will start referencing towards setTimeout Function scope instead of gloal or Class Scope
//to solve loosing his issue we use 
//1) Function inding this.click = click
//2) Function Wrapping e.g function indide an other funcion
//3) //using arrow functiion /convert your simple function inside the class to an arrow function as arrow function this is always inded to thier arrow function


//Setter
//Getter


//Inheritence -  create functionslity over the existing class functionslity

// extends keyword to inherit parent class
//constructor inside constructor (constructure chaining) first call parent constructor then child constructor is called
//Super keyword vs This keyword //super shows scope or context of parent class //super call a parent method super.parentMethod() //super calls parent class constructor e.g super

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

class Rabbit extends Animal {
    
    hide() {
      console.log(`${this.name} hides!`);
    }
  }
  class Parrot extends Animal{
    constructor(){
        super("Parrot");//this.name = parrot now
        console.log("parrot class constructor with super" + this.name)
    }
    fly(){
        console.log(`${this.name} fly`)
    }
    stop(){
        super.stop("Using super.stop in Parrot Class");
        console.log(this.name+ " function Overriding - as stop function of Parent Class Animal is overrided with Parrot Child Class stop function")
    }
  }

  class Hen extends Animal{
    static name = "HenCock"
    constructor(){
        super();//to call parent class constructor we use super keyword and it is mendatory to call parent class constructor first then child Class Hen Constructor will work

        console.log(this.name + " This is Hen Class Constructor which is child class of Animal")
    }
    jump(){
        
        console.log(this.name + "Hen can Jump")
    }
  }
  let rabbit = new Rabbit("White Rabbit");
  let parrot = new Parrot("Green Parrot");
  let hen = new Hen();
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!
  rabbit.stop();

  parrot.fly();
  parrot.run(2);
  parrot.stop();
  
  
  hen.jump();
  hen.run(2);//undefined runs with speed 2.
            
  hen.stop(); //undefined stands still.  as we called parent constructor and now this pints to parent while we are not passing this.name expilictly for Hen Child class so it is assigning undefined to hen.this.name


  //Static - Data Sharing among classess


  
