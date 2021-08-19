const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
// sort() দিয়ে নাম্বার কে সিরিয়াল অনুযায়ী সাজানো
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// reverse() শেষ থেকে শুরু করা হয়
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
// sort() এ মাঝে মাঝে নাও আসতে পারে , তখন এই নিয়মে করতে হবে।
const sortedBigNumbers = bigNumbers.sort(function(a, b) {
    return a - b;
});
console.log(sortedBigNumbers);