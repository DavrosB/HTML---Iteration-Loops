`use strict`

// ITERATION
// (loops)

// FOR
// use a counter
// run until a condition is met

for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
//  console.log(`i = ` + i);
}

// WHILE
// works with booleans (TRUE or FALSE)
// run while the condition is true

let condition = true;
let increment = 0;

while(condition) {

    console.log(`increment me`);
    increment++;

    if (increment == 3) {
        condition = false;
    }

}

// DO-WHILE
// like a while loop
// but always runs at least once
let a = false;

do {
    console.log(`run forest run`);
} while(a);

// SWITCH CASES

// run until a BREAK or RETURN
// can be more effective than large if-else statements

let num = 11;

switch(num) {
    case 0:
        console.log(`zero is zero`);
        break;
    case 1:
        console.log(`we're at one`);
    case 4:
        console.log(`now it's four`);
    case 10:
        console.log(`we've made it to ten!`)
        break;
    default:
        console.log(`not sure what you are doing here`)
}