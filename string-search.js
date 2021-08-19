const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'dell';

// String পুরা পুরি Array না তবে Array মতো । অনেক সংখ্যার ভিতর থেকে একটি সংখ্যাকে বের করে নিয়ে আসতে indexOf ব্যবহার করতে হয়।
// indexOf

const output = [];
for (const product of products) {
    // কোন একটা Element যদি কোন Array মধ্যে থাকে তাহলে এর indexOf() হবে 0, 1, 2, 3  আর না থাকলে -1 হবে।
    // String এর মধ্য কোন একটা জিনিস আছে কিনা তা দুই ভাবে চেক করা যায়, 1.indexOf() 2.includ() আর যেটা বের করবো সেটাকেও toLowerCase আর যেটা খুজবা সেটাকেও toLowerCase করবো। আর যদি জিনিসটা case সেনসিটিব হয় তাহলে toLowerCase করা যাবে না। যেমন:- password জাতীয় case
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

// console.log(output);
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

console.log(output);

// startsWith এর মাধ্যমে শুরুতে যে শব্দ থাকবে ঐ শব্দ নিয়ে পুরা পেরা আসবে, মাঝে বা শেষে থাকলে আসবে না। এটি শুধু শুরুর শব্দকে খুজবে।
//starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output)