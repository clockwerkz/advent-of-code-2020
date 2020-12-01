module.exports = function(input) {
    const arr = input.split('\n').map(el => parseInt(el));
    arr.forEach(el => console.log(el));
}