const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const search = 'valo';

// string এর ক্ষেত্রে সমান মান বের করতে হলে, উভয় পাশে বা একপাশে toLowerCase() এবং toUperCase() দুটি ফাংশন ব্যবহার করতে হয়, যাতে ফাংশনের মান একই সাইজের আসে।
const userInput = 'blACkPinK';
const savedUserName = 'blackPink';
// console.log(userInput.toLowerCase());
// console.log(savedUserName.toLowerCase());
if (userInput.toLowerCase() == savedUserName.toLowerCase()) {
    console.log('user exists');
}