module.exports = function(input, num) {
    let [leftPtr, rightPtr, currentSum] = [0, 0, 0];
    while (leftPtr <= rightPtr && currentSum !== num) {
        if (currentSum < num) {
            currentSum += input[rightPtr++];
        } else if (currentSum > num){
            currentSum -= input[leftPtr++];
            console.log(leftPtr);
        }
    }
    console.log(leftPtr, rightPtr);
    return [leftPtr, rightPtr];
}
