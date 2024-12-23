//arrays
const myarr = [1,5,4,8,9]
console.log(myarr);
 
const myarr2 = [24,7,3,2]  //yaha 03 hai but output mei sirf 3 aya hai
console.log(myarr2)

const myarr3 = new Array(4, 6,6,323,7,2)
console.log(myarr3);

//methods
myarr.push(7)
console.log(myarr);


const xyz = myarr.join()
console.log(xyz);


//slice, splice

console.log("A", myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("B", myarr);


const myn2 = myarr.splice(1,3)
console.log(myarr)
console.log(myn2);

//splice mei original array hi change ho jata hai and slice mei buss uska copy change hota hai

