let bioData = {
 myName: {
  realName: "Tejas",
  channelName: "Ossha"
 },
 myAge: "21",

 bio: () => {
  console.log(`My name is ${bioData.myName} and myAge is${bioData.myAge}`);
 }

}

console.log(`My name is ${bioData.myName.realName} and i am also calling bio function i.e${bioData.bio()}`);
bioData.bio();