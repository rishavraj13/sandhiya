let mydate = new Date()
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);
console.log(mydate.toLocaleString());

let date = new Date();

date.setFullYear(2025);  // Set year to 2025
date.setMonth(0);        // Set month to January (0-indexed)
date.setDate(15);        // Set day of the month to 15
date.setHours(14);       // Set hours to 14 (2 PM)
date.setMinutes(45);     // Set minutes to 45

console.log(date);     


