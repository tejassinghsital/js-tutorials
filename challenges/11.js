//Q1 find the square root of the each element in an array

let arr=[25,36,49,64,81];

var maparr=arr.map((element)=>{
    return Math.sqrt(element);
});

console.log(maparr);

//Q2 Multiply each element by 2 and return only those elements which are greater than 10

let arr1=[2,3,4,6,8];

var filterarr=arr1.map((element)=> (element*2)).filter((element)=> element>10);
console.log(filterarr);

