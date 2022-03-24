let a = "Hi";

let first = () => {

 let b = "I am tejas";

 let second = () => {
  let c = "How you are doing?";
  console.log(a + " " + b + " " + c);
 }

 second();
 console.log(a + " " + b + " " + c);
}
first();