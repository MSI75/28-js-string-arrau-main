const myName = 'ami';
const student = undefined;

// console.log(student.name);

// যে জিনিসটা error দেওয়ার সম্ভাবনা আছে সেটাকে try এর ভিতরে রাখতে হবে।
try {
    myName = 'tumi';
} catch (error) {
    console.log('getting error', error);
}
console.log(100);
console.log(myName);

// for (let i = 0; i < 10 i++) {

// }
// name = 'tumi';
// console.log(name);