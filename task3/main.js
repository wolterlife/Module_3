function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function createChunks(start, end, chunkSize) {
    const chunks = [];
    for (let i = start; i <= end; i += chunkSize) {
        chunks.push([i, i + chunkSize - 1]);
    }
    return chunks;
}

function processChunk(chunk) {
    return new Promise((resolve) => {
        const [chunkStart, chunkEnd] = chunk;
        const chunkPrimes = [];

        for (let i = chunkStart; i <= chunkEnd; i++) {
            if (isPrime(i)) {
                chunkPrimes.push(i);
            }
        }

        resolve(chunkPrimes);
    });
}

async function findPrimes(start, end) {
    const startTime = performance.now();
    const totalNumbers = end - start + 1;
    const chunkSize = Math.ceil(totalNumbers / 100);
    const chunks = createChunks(start, end, chunkSize);
    const totalChunks = chunks.length;
    const primes = [];
    let processedChunks = 0;

    for (const chunk of chunks) {
        const chunkPrimes = await processChunk(chunk);
        primes.push(...chunkPrimes);
        processedChunks++;

        const progress = Math.floor((processedChunks / totalChunks) * 100);
        if (progress % 10 === 0) {
            console.log(`Progress: ${progress}%`);
        }
    }
    const endTime = performance.now();
    console.log(`${primes.length} простых чисел`);
    console.log(`Время: ${(endTime - startTime).toFixed(2)} миллисекунд`);
}


findPrimes(1, 100000000);