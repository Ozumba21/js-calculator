
let card = parseInt(prompt("Enter first number: "))
let onions = prompt("operators:");
let victor = parseInt(prompt("Enter last number: "))

if(onions === "+"){
    alert(card + victor)
} else if(onions === "-"){
    alert(card - victor)
} else if (onions === "/"){
    alert(card / victor)
} else if (onions === "*"){
    alert(card * victor)
}