module.exports = function(input, num) {
    const arr = input.split('\n').map(el => parseInt(el));
    let [leftPtr, rightPtr, currentSum] = [0,0, 0];
    while (leftPtr <= rightPtr && currentSum !== num) {
        if (currentSum < num) {
            currentSum += arr[rightPtr++];
        }
        if (currentSum > num) {
            currentSum -= arr[leftPtr++];
        }
    }
    const subArr = arr.slice(leftPtr, rightPtr);
    return Math.min(...subArr) + Math.max(...subArr);
}
