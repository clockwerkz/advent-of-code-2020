function findPairs(arr, start, pos) {
    let map = {};
    for (let i=start; i < pos; i++) {
        if (map[arr[i]]) {
            return true;
        } else {
            let compliment = arr[pos] - arr[i];
            map[compliment] = 1;
        }
    }
    return false;
}

module.exports = function(input, buffer) {
    const arr = input.split('\n').map(el => parseInt(el));
    let [start, pos] = [0, buffer];
    while (pos < arr.length) {
        if (!findPairs(arr, start, pos)) {
            return arr[pos];
        }
        pos++;
        start++;
    }
    return -1;
}