// https://www.codewars.com/kata/5b61d6ef07a266d40b000097/


async function promiseHelloWorld() {
    return await 'Hello World!'
}

return new Promise((resolve) => {
    resolve('Hello World!')
})

const promiseHelloWorld = () => Promise.resolve('Hello World!');



