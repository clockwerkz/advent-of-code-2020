module.exports = function(arr) {
    const map = {};
    arr.forEach(el => map[2020 - el] = el);
    for (let i=0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i] * map[arr[i]];
        }
    }
    return 0;
}