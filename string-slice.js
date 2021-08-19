const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
// split অর্থ ভাগ করে ফেলা। প্যারাগ্রাপের ভিতর থেকে দুটি শব্দকে ভাগ করে ফেলা।
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice 
// প্যারাগ্রাপের ভিতর থেকে ওয়ার্ডস্ কে নির্দিষ্ট করে ফেলা বা এক শব্দ থেকে অন্য শব্দে কতটুকু যাবে।
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
// কোন একটা ইন্ডেক্সে এ কয়টা ক্ যারেক্ টার দরকার তা বের করার জন্য 
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

//concat
// একাদিক String কে জোড়া দেওয়া ।
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria')
    // console.log(fullString);

// 
// String কে সংযোগ করার পদ্ধতি।
const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('WWW');
console.log(allJoined);