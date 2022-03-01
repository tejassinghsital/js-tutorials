let currDate= new Date();

//getters
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());


//setters

console.log(currDate.setFullYear(1978,09,19));//year month and day can go in this fx
console.log(currDate.setMonth(09));
console.log(currDate.setDate(6));


console.log(currDate.toLocaleString());
console.log(currDate);
