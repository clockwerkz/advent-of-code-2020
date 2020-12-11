module.exports = function(input) {
    let deviceList = input.split('\n').map(el => parseInt(el)).sort((a,b)=> a - b);
    let rating = 0;
    let tabulation = {
        '1' : 0,
        '3' : 1
    }
    for (device of deviceList) {
        difference = device - rating;
        tabulation[difference]++;
        rating = device;
    }
    return tabulation[1] * tabulation[3];
}