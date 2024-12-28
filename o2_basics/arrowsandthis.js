const user = {
    username: 'rishi',
    price: 999,

    welcome: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
    
    
};

user.welcome();

user.username = "raj";
user.welcome()

//function kei andar THIS ka use nahi kar pate hai but objects mei kar pate hai

const parafunction = () => { // this is called PARENTHESIS FUNCTION//////ARROW function aise hi likhte hai
    let usern = "rishav";
    console.log(this.usern);
    

}

parafunction()

//************************************************** */

const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(3,4)); //this type is called explict return 

const addnum = (n1, n2) => (n1+n2); //this type is called impicit return and yeh react mei asie ho likha jata hai
console.log(addnum(5,7));

