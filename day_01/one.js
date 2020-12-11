module.exports = function(arr) {
    const map = {};
    arr.forEach(el => map[2020 - el] = el);
    for (let compliment of arr) {
        if (map[compliment]) {
            return compliment * map[compliment];
        }
    }
    return 0;
}