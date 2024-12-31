// function findPrimes1(start, end) {
//     let count = 0;
//     for (let i = start; i <= end; i++) {
//       if (end % i === 0) {
//         count = count + 1;
//       } 
//     }
//     return count;
// }

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 

async function findPrimes2(start, end) {
    const startTime = performance.now();
    const primes = [];
    const range = end - start;
    const progressStep = Math.floor(range / 10);
    let nextProgressCheck = start + progressStep;
    let progressCount = 10;

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
        if (i >= nextProgressCheck) {
            console.log(`Прогресс: ${progressCount}%`);
            nextProgressCheck += progressStep;
            progressCount += 10;
            // await new Promise(r => setTimeout(r, 0));
        }
    }

    const endTime = performance.now();
    console.log(`Простых чисел: ${primes.length}`);
    console.log(`Время: ${(endTime - startTime).toFixed(2)} миллисекунд`);
}

findPrimes2(1, 1000000)