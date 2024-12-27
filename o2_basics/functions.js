const user = {
    username: "rishi",
    pass: 123,
    price: 245,
};

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleobject(user);//yaha par call kar diye taaki run kara dei

handleobject({
    username: "rishab",
    price: 145,
});
