
let inches = 42;
let feet = inches / 12;
console.log(`(a) 42 inches = ${feet} feet`);


let lengthFeet = 60;
let widthFeet = 40;
let feetToMeter = 0.3048; // 1 foot = 0.3048 meters
let lengthMeters = lengthFeet * feetToMeter;
let widthMeters = widthFeet * feetToMeter;
console.log(`(b) Rectangular Plot: ${lengthFeet} ft x ${widthFeet} ft = ${lengthMeters.toFixed(2)} m x ${widthMeters.toFixed(2)} m`);

let plotAreaFeet = lengthFeet * widthFeet; // Area of 1 plot in square feet
let totalAreaFeet = plotAreaFeet * 25; // Total area of 25 plots
let sqftToAcre = 43560; // 1 acre = 43,560 sq. ft.
let totalAreaAcres = totalAreaFeet / sqftToAcre;
console.log(`(c) Total area of 25 plots = ${totalAreaAcres.toFixed(4)} acres`);
