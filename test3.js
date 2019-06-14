/*class Test {
    check() {

        console.log("Obj function")
    }

    static checkStatic() {
        console.log("static function")
    }
}

Test.checkStatic();
var t = new Test();
t.check();

class TestChild extends Test {

}
*/

/*function check(a, ...b) {

    console.log(a);
    for(let i = 0;i < b.length; i++) {
        console.log(b[i]);
    }
}

check(1,2,3,4,5);*/

/*let [x,y] = [5,8];
var [a,,[b],c] = [5,null,[6]];*/

/*class Person {

}
var p = new Person();
console.log(p instanceof Person);*/

/*var a=[1,2,3,4,5];
for(let i in a)
    console.log(a[i]);*/

/*function* rainbow() {
    yield 'red';
    yield 'yellow';
}
for(let i of rainbow()) 
    console.log(i);*/

/*var test = new Object();
test.name = "seeni";
test.age = "22";
console.log(test.name);*/

/*var a = 1;
var b = 3;
console.log(`The sum of ${a} and ${b} is ${a+b}`);*/
<script>
class car {
    constructor(doors){
        this.doors = doors;
    }

    logging() {
        console.log("this is car");
    }
}

class bike {
    constructor(doors) {
        this.doors = doors;
    }
}

class factory {
    createVehicle = (type, doors) => {
        switch(type) {
            case "car":
                return new car(doors);
            case "bike":
                return new bike(doors);
        }
    }
}
f = new factory();
car = factory.createVehicle("car", 4);
car.logging();
</script>