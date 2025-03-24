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

//findTheBanana(allArrays);

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


function addYear() {
    var date = new Date();
    var year = date.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML += year;
}

//function showList() {
//    document.getElementById("FavList").style.display = "block";
//    document.getElementById("SeeMoreBtn").style.display = "none"
//}


$(document).ready(function () {
    
    $("#readMore").click(function () {
        $("#shortBio").hide(); 
        $("#fullBio").show(); 
        $("#readMore").hide(); 
        $("#readLess").show(); 
    });

    $("#readLess").click(function () {
        $("#fullBio").hide(); 
        $("#shortBio").show(); 
        $("#readLess").hide(); 
        $("#readMore").show(); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("contact.html")) {
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("contactForm");
            if (form) {
                form.addEventListener("submit", function (event) {
                    event.preventDefault(); // Prevent form submission if validation fails
    
                    let isValid = true;
    
                    let nameInput = document.getElementById("name");
                    let emailInput = document.getElementById("email");
                    let commentInput = document.getElementById("comment");
    
                    let nameError = document.getElementById("nameError");
                    let emailError = document.getElementById("emailError");
                    let commentError = document.getElementById("commentError");
    
                    nameError.textContent = "";
                    emailError.textContent = "";
                    commentError.textContent = "";
    
                    if (!nameInput.checkValidity()) {
                        nameError.textContent = "Please enter your name.";
                        isValid = false;
                    }
    
                    if (!emailInput.checkValidity()) {
                        emailError.textContent = "Please enter a valid email address.";
                        isValid = false;
                    }
    
                    if (!commentInput.checkValidity()) {
                        commentError.textContent = "Please enter a comment.";
                        isValid = false;
                    }
    
                    if (isValid) {
                        alert("Form submitted successfully!");
                        this.submit();
                    }
                });
            }
        });
    }
    
});

function validate() {
    if (window.location.href.includes("contact.html")) {
        function validate() {
            var userName = document.getElementById("UserName");
            var userEmail = document.getElementById("UserEmail");
            var userText = document.getElementById("UserText");
            var msg = document.getElementById("ValidateMsg");
    
            if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
                msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
            }
        }
    }
    
 }

 function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again!";
        });
}



