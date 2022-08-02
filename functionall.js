function say(){
    console.log('i lovw meaow');
    console.log('meow meow');
}

say();
var date=14;
say();
var palce="restaurant";
say();

function doubleIt(num){
    var result=num*2;
    console.log(result);
}

doubleIt(10);
doubleIt(15);

function doubleIt(num){
    var result=num*2;
    return result;
}

var first=doubleIt(10);
var second=doubleIt(15);
var total=first+second;
console.log(total);


function add(num1,num2){
    var result=num1+num2;
    return result;
}
var sum=add(16,20);
console.log(sum);
