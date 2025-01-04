function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countPrimesInRange(start, end) {
    let primeCount = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }
    return primeCount;
}

async function findPrimes2(start, end) {
    const startTime = performance.now();
    let totalPrimeCount = 0;
    const range = end - start + 1;
    const chunkSize = Math.floor(range / 100);
    let progressCount = 0;
    let completedChunks = 0;

    const promises = [];

    for (let i = 0; i < 100; i++) {
        const chunkStart = start + i * chunkSize;
        const chunkEnd = (i === 99) ? end : chunkStart + chunkSize - 1;

        promises.push(new Promise((resolve) => {
            setTimeout(() => {
                const chunkPrimeCount = countPrimesInRange(chunkStart, chunkEnd);
                totalPrimeCount += chunkPrimeCount;
                completedChunks++;
                if (completedChunks % 10 === 0) {
                    progressCount += 10;
                    console.log(`Прогресс: ${progressCount}%`);
                }
                resolve({ chunkStart, chunkEnd, totalPrimeCount, chunkSize: chunkEnd - chunkStart });
            }, 0);
        }));
    }


    await Promise.all(promises);
    console.log(promises);

    const endTime = performance.now();
    console.log(`Простых чисел: ${totalPrimeCount}`);
    console.log(`Время: ${(endTime - startTime).toFixed(2)} миллисекунд`);
}
