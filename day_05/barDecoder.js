module.exports = function(bar) {
    let [lower, upper] = [0,127];
    let positions = bar.split('').slice(0,7);
    let seats = bar.split('').slice(7);
    let row;
    for (let pos of positions) {
        let midpoint = Math.floor((upper-lower) / 2) + lower;
        if (pos == 'F') {
            upper = midpoint;
            row = lower;
        } else {
            lower = midpoint + 1;
            row = upper;
        }
    }
    lower = 0;
    upper = 7;
    let seatPos;
    for (let seat of seats) {
        let midpoint = Math.floor((upper-lower) / 2) + lower;
        if (seat == 'L') {
            upper = midpoint;
            seatPos = lower;
        } else {
            lower = midpoint + 1;
            seatPos = upper;
        }
    }
    return row * 8 + seatPos;
}
