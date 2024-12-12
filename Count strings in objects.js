const strCount = (obj) => {
    let counter = 0
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            counter += 1
        }
        if (typeof obj[key] === 'object') {
            counter += strCount(obj[key])
        }
    }
    return counter
}