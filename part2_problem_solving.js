function rotateLeft(arr, n) {
    for (let i = 0; i < n; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 4));
