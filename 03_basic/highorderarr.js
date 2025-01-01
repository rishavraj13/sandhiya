const arr = [1,5,88,7,3];

for(const num of arr){ //kiskei upar loop lagana hai (yaha par "arr" kei upar loop lagana hai)
    //console.log(num);
    
} 

const greetings = "hello sir";

for(const greet of greetings){
   // console.log(`each character is ${greet}`);
    
}

//MAPS

//maps are known as for it's unique values and jis order mei data stored hai ussi order meo rahega data 


const map = new Map();

map.set('IN', "india")
map.set('US', "united states")
map.set('CAN', "canada")
map.set('US', "united statkes")

console.log(map);

for(const key of map){
    console.log(key);
}


for(const [key, value] of map){ //destructuring of array
    console.log(key, "-:", value);
}

const progr = [23, 4, 6 ,"kj", "rf"];

for(const key in progr ){
    console.log(progr[key]);
}

