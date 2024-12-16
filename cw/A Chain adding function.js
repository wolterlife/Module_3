function add(n) {
    const chain = function (m) {
        return add(n + m);
    };

    chain.valueOf = function () {
        return n;
    };

    chain.toString = function () {
        return String(n);
    };

    return chain;
}