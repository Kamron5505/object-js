let ism = prompt("Enter your name")   
let id = +prompt("Enter your id")
let password = +prompt("Enter your password")
let user = {
    name:ism,
    id:Number(id),
    password:Number(password)
}
console.log(user);
