/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
    let prime = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false
            break
        }
    }
    if (i > 1 && prime) {
        console.log(i)
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let i = 1;

/// EDIT HERE
while (fiftiethPrime == null) {
    let prime = true
    let j = 2
    while (prime && i > j) {
        if (i % j == 0) {
            prime = false
        }
        j++
    }
    if (i > 1 && prime) {
        primeCounter++
        if (primeCounter == 50) {
            fiftiethPrime = i
        }
    }
    i++
}
console.log(`the 50th prime number is ${fiftiethPrime}`)


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let j = 1;

/// EDIT HERE
do {
    let odd = true

    if (j % 2 == 0) {
        odd = false
    }

    if (j > 0 && odd) {
        oddCounter++
        if (oddCounter == 50) {
            fiftiethOdd = j
        }
    }
    j++
} while (fiftiethOdd == null)

console.log(`the 50th odd number is ${fiftiethOdd}`)