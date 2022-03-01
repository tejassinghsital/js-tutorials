// let anysentence ="we are the "Vikings"  frm the north"; 
//solution
anysentence1='we are the "Vikings" from the north.';//use "" or '' alternatively.
anysentence2=`we are the "vikings" from the north.`;// use backtick but same problem wat if you want backtick as character inside string
//so best is we use escape characters means put \ before these confusing "" or '' or ``
anysentence3= "we are the \"Vikings\" from the north.";

console.log(anysentence1);
console.log(anysentence2);
console.log(anysentence3);