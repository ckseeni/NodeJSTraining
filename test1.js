


 /*function check() {
	if(this.isStudent === "true")
		document.write(this);
	else
		document.write("No");
 }

 function Person(name, isStudent) {
	this.name = name;
	this.isStudent = isStudent;
	this.check = check;
 }

 p = new Person("seeni", "true");
 p.check();
 p1 = new Person("mari", "false");
 p1.check();*/
 
 function Person() {
 
	var v1 = "private var";
	this.v2 = "public var";
	v3 = "pre var";
	
	var v4 = function() {
		console.log("private function");
	}
	
	this.v5 = function() {
		console.log("public function");
		console.log("under public calling private function");
		v4();
		console.log("under public calling private var");
		console.log(v1);
	}
	
	v6 = function() {
		console.log("pre function");
	}
 }
 
 Person.prototype.v7 = "prototype var";
 Person.prototype.v8 = function() {
	 console.log("prototype function");
 }

 function Child() {

 }
 Child.prototype = new Person();
 c = new Child();
 console.log(c.v7);
 
 p = new Person();
 //console.log(p.v1);
 console.log(p.v2);
 console.log(v3);
 //p.v4();
 p.v5();
 v6();
