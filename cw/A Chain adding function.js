function add(n) {
    const chain = function (m) {
        return add(n + m);
    };

    chain.valueOf = function () {
        return n;
    };

    return chain;
}