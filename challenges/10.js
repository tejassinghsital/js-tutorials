let str1="This is some lorem ipsum text to check 280 characters limit program similar to one in twitter postt length but i have no idea why the heck ami a goining to write all this sample text instead of just copy and pasting from anywhere i guess because i don't want to open chrome in this slow end pc."

let res=str1.slice(0,280);// it goes upto 279 index but indexing start from 0 so inderictly still printing 280 characters.
console.log(res);