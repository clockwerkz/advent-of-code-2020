const seatLocator = require('./seatLocator');
const barDecoder = require('./barDecoder');
module.exports = function(input) {
    const barcodes = input.split('\n');
    let seatChart = {};
    for (barcode of barcodes) {
        let [row, seat] = seatLocator(barcode);
        if (seatChart[row]) {
            seatChart[row].push(seat);
        } else {
            seatChart[row] = [ seat ];
        }
    }
    let rows = Object.keys(seatChart).sort();
    for (row in rows) {
        if (seatChart[row] && seatChart[row].length < 8) {
            let seatCounter = 0;
            for (seat of seatChart[row].sort()) {
                if (seatCounter != seat) {
                    break;
                } 
                seatCounter++;
            }
            barcodeID = row * 8 + seatCounter;
            let [ lowIDFound, highIDFound ] = [false, false];
            for (barcode of barcodes) {
                if (barDecoder(barcode) == barcodeID - 1) lowIDFound = true;
                if (barDecoder(barcode) == barcodeID + 1) highIDFound = true;
                if (lowIDFound && highIDFound) {
                    return barcodeID;
                }
            }
        }
    }
}
