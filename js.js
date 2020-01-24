// const userInput = prompt("Enter string");
// const inputLength = userInput.length;
// console.log(userInput, inputLength)
// switch (inputLength) {
//     case 1:
//         document.write(1);
//         break;
//     case 2:
//         document.write(2);
//         break;
//     case 3:
//         document.write(3);
//         break;
//     case 4:
//         document.write(4);
//         break;
//     default:
//         break;

// }

// console.log(Math.round(Math.random() * 4 + 10));
let myStr = "";
for (let i = 0; i < 10; i++) {
    myStr = myStr + i;
    if (i === 9) { myStr += "." } else { myStr += ", " }
}
console.log(myStr)