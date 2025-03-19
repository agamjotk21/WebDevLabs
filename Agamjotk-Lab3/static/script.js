let x = 5;
let y = 7; 
let z = x + y; 
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B; 
console.log(C)

function SumNPrint(x1, x2) {
    let x3 = x1 + x2
    console.log(x3)
}

SumNPrint(x, y)
SumNPrint(A,B)


if(C.length > z) {
    console.log(C)
}

else if(C.length < z) {
    console.log(z)
}

else {
    console.log("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];
let allArrays = [L1,L2]

function findTheBanana(arrays) {
    arrays.forEach(function(array, index) {
        let position = (index === 0) ? "first" : "second"; 
        array.forEach(function(item) {
            if (item === "Banana") {
                alert("We found a Banana in the " + position + " array!");
            }
        });
    });
}

findTheBanana(allArrays);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();

    let E = document.getElementById("greeting");

    if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else if (h < 24 || h < 5) {
        greeting = "Good night";
    }
    
    E.innerHTML = `${greeting}, I am Agam`;
}
greetingFunc()



