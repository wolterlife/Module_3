const user = {
    name: "John",
    age: "23",
    job: "developer"
}

// console.log(Object.getOwnPropertyDescriptors(user))

Object.defineProperties(user, {
    name: { enumerable: false, configurable: false, writable: false },
    age: { enumerable: false, configurable: false, writable: false },
    job: { enumerable: false, configurable: false, writable: false },
})

console.log('properties after changing: ', Object.getOwnPropertyDescriptors(user))

user.name = "Sam";
delete user.job;

console.log("modify: ", user.name);
console.log("enumerate: ", user);
console.log("delete: ", user.job);

