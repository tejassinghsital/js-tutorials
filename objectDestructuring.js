myBioData = {
 myFName: 'tejas',
 myLName: 'singh',
 myAge: 21
}

let { myFName, myLName, myAge, myDegree = "b.tech" } = myBioData;
console.log(myFName);
console.log(myDegree);
console.log(myBioData);