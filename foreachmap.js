const array1=[1,4,9,16,25];

//num>9

//return through for each loop
var forarr=array1.forEach((element) => {
    // console.log(element>9);
    return (element>9);
});
console.log(forarr);

//return through map method
var maparr=array1.map((element) => {
    // console.log(element>9);
    return (element>9);
});
console.log(maparr);

//return though filter methd
var filterarr=array1.filter((element) => {
    // console.log(element>9);
    return (element>9);
});
console.log(filterarr);