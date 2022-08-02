var friendsAge = [12,14,15,16];
console.log(friendsAge);
var rahat=friendsAge[2];
console.log(rahat);
friendsAge[1]=21;
console.log(friendsAge);
var position=friendsAge.indexOf(121);

console.log(position);
friendsAge.push(15);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);

var teaLine= ["salam","rahim","kabir","safi","rafi","adi"];
teaLine.shift();
console.log(teaLine);
teaLine.unshift("kalam");
console.log(teaLine);
var part=teaLine.slice(2,4);
console.log(part);