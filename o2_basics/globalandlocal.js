//{} these curly braces are called SCOPES... almost har programming language isi ko acope bolte hai
/*objects mei curly braces ka matlab hai for object declarestion 
but in functions or with if-else kei saath aaye tab waha isko bolte hai SCOPES 

IF kei andar jo bhi likahye ga woh hai block scope and bahar mei jo hoga woh hai global scope 

SCOPE kei andar jo value likhte hai woh VALUE bahar nahi jani chahiye





*/

//example for block and global scope

let a = 25; //its a global 

if(true){ //yeh hai block scope
    let a = 456;
    console.log(a);
    
};

console.log(a);

//********************************************************* *

function one (){
    const username= 'rishi';

    function two(){
        const another = 'raj';
        console.log(username);
        
    }
    two()
}
one()

