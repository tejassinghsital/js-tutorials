var num1=26;
var num2=54;
console.log(`num1 is ${num1} and num2 is ${num2} before swap`);

swap1(num1,num2);

swap2(num1,num2);

swap3(num1,num2);

swap4(num1,num2);

swap5(num1,num2);

function swap1(num1,num2){
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log(`now num1 is${num1} and num2 is ${num2} after swap with extra variable`);

}
function swap2(num1,num2){
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    console.log(`now num1 is${num1} and num2 is ${num2} after swap with one extra bit `);
}

function swap3(num1,num2){
    num1=num1^num2;
    num2=num1^num2;
    num1=num1^num2;
    console.log(`now num1 is${num1} and num2 is ${num2} after swap without one extra bit `);
}

function swap4(num1,num2){
    num1+=num2-(num2=num1);
    console.log(`now num1 is${num1} and num2 is ${num2} after swap with one extra bit shotcut`);
}
function swap5(num1,num2){
    num1^=num2^(num2=num1);
    console.log(`now num1 is${num1} and num2 is ${num2} after swap without one extra bit shortcut `);
}