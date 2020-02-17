let a = 1;   
let b = 1;
let c = ++a;
let d = b++;

console.log(a);  //1
console.log(b);  //1
console.log(c);  //2
console.log(d);  //1


// 2.จงหาผลลัพธ์รของstatement ต่อไปนี้

console.log(""+1+0); //1
console.log(""-1+0); //-1
console.log(true+false); //1
console.log(6/ "3");  //2
console.log("2"*"3"); //6
console.log(4+5+'px'); //9px
console.log("$"+4+5); //$45
console.log("4"-2);  //2
console.log("4px"-2); //NaN
console.log(7/0);  //infinitiy
console.log(" -9 "+5);  // -95
console.log(null+1);  // 1
console.log(undefined+1); // NaN
console.log("\t\n"-2);  // -2