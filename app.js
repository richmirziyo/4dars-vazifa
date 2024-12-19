// 1 misol

let k = 7;
let n = 5;

for (let i = 0; i < n; i++) {
  console.log(k);
}

// 2 misol

let narx = 2400;

for (let i = 1; 1 <= 10; i++) {
  console.log(`${i} kg = ${i * narx}`);
}

// 3 misol

let m = 5;
let counter = 0;

for (let i = 0; i <= n; i++) {
  counter += (n + i) ** 2;
}

console.log("Counter: ", counter);

// 4 misol

let N = 5;
let M = N; //5 teng
let counterN = 0;

for (let i = 1; i <= N; i++) {
  counterN += i ** N;
  N--;
}

console.log(counterN);

// 5 misol

let a = 3;
let b = 6;
let text = "";

for (let i = a; i <= b; i++) {
  for (let j = 0; j < i; j++) {
    text += i;
  }
}

console.log(text);
text = "";

// 6 misol

let number = 24;

for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}
