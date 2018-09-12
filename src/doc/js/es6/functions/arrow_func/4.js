function log(msg) {
    let print = () => console.log(arguments[0]);
    print(`LOG: ${msg}`);
}

log('Hello');

function log2(msg) {
    let print2 = (...rest) => console.log(rest[0]);
    print2(`LOG: ${msg}`);
}

log2('Hello');