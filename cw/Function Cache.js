// https://www.codewars.com/kata/525481903700c1a1ff0000e1/

function cache(func) {
    const cacheStore = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cacheStore.has(key)) {
            return cacheStore.get(key);
        }
        const result = func(...args);
        cacheStore.set(key, result);
        return result;
    };
}