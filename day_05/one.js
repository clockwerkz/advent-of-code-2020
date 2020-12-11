const fs = require('fs');
const barDecoder = require('./barDecoder');

module.exports = function(input) {
    let barcodes = input.split('\n');
    let max = 0;
    for (barcode of barcodes) {
        let currentBarcode = barDecoder(barcode);
        max = Math.max(max, currentBarcode);
    }
    return max;
}