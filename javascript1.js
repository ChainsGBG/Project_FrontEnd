let button = document.getElementById("button");
if (button) {
button.addEventListener("click", function() {
    let text = document.getElementById("text");
    let cloneT = text.firstElementChild.cloneNode(true);
    text.appendChild(clone);
    let email = document.getElementById("email");
    let cloneE = email.firstElementChild.cloneNode(true);
    email.appendChild(clone);
    let pizza = document.getElementById("pizza");
    let cloneP = pizza.firstElementChild.cloneNode(true);
    pizza.appendChild(clone);    
});
}