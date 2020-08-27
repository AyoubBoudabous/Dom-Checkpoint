let plus = Array.from(document.getElementsByClassName("plus-btn"));
let minus = Array.from(document.getElementsByClassName("minus-btn"));
let qte = Array.from(document.getElementsByClassName("quantité"));
let price = Array.from(document.getElementsByClassName("price1"));
let heart = document.querySelectorAll(".fa-heart");
let trash = document.querySelectorAll(".fa-trash");
let total = document.querySelectorAll("total");

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        qte[i].value++;
        totale();
    });
}
for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener("click", function() {
        if (qte[i].value > 0) {
            qte[i].value--;
        }
        totale();
    });
}
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
        if (heart[i].style.color == "red") {
            heart[i].style.color = "black";
        } else {
            heart[i].style.color = "red";
        }
    });
}
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function() {
        trash[i].parentElement.parentElement.parentElement.remove();
        totale();
    });
}

function totale() {
    let q = Array.from(document.getElementsByClassName("quantité"));
    let p = Array.from(document.getElementsByClassName("price1"));
    let somme = 0;
    for (let i = 0; i < p.length; i++) {
        somme += q[i].value * parseInt(p[i].innerHTML);
    }
    document.querySelector(".total").innerHTML = somme;
}