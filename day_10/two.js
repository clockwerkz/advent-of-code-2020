module.exports = function(input) {
    const arr = input.split('\n').map(el => parseInt(el)).sort((a,b) => a - b);
    arr.push(arr[arr.length -1] + 3);
    arr.unshift(0);
    let perms = 0;
    let i = 0;
    while (i < arr.length - 3) {
        if (arr[i + 3] - arr[i] <= 3) {
            perms *= 4;
            i+=3;
        } else if (arr[i+2] - arr[i] <= 3) {
            perms *= 2;
            i+=2;
        } else {
            i++;
        }
    }
    return perms;
}