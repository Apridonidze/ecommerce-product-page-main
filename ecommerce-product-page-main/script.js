let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let submitBtn = document.querySelector("#submitBtn");
let priceOutput = document.querySelector("#priceOutput");
let originalPriceOutput = document.querySelector("#originalPrice");
let cartBtn = document.querySelector("#cartBtn");
let cartToggle = document.querySelector(".cart-toggle");
let amount = 0;
let price = 125;
let deleteBtn = document.querySelector("#delete");
let profileBtn = document.querySelector("#imgBtn");
plus.addEventListener("click", () => {
    amount++;
    document.querySelector("#x").textContent = amount;
    priceOutput.textContent = "$" + amount * price + ".00";
    originalPriceOutput.textContent = "$" + (amount * price + 125) + ".00";
});
minus.addEventListener("click", () => {
    amount--;
    document.querySelector("#x").textContent = amount;
    priceOutput.textContent = "$" + amount * price + ".00";
    originalPriceOutput.textContent =  "$" + (amount * price + 125) + ".00";
    if (amount === 0) {
        originalPriceOutput.textContent = "$0.00";
    }
});
submitBtn.addEventListener("click",() => {
    let cartSpan = document.querySelector("#cartSpan");
    cartSpan.style.display = "flex";
    cartSpan.textContent = amount;
    if (amount <= 0){
        alert("enter valid amount of product");
        cartSpan.style.display = "none";
    } else {
        document.querySelector(".toggleOrder").style.display = "flex";
        document.querySelector("#Price").textContent = "$125.00 x" + " " + amount + " " + "$" + (amount * price) + ".00";
        document.querySelector("#empty").style.display = "none";
        document.querySelector(".toggleOrder-footer").style.display = "flex";
        
    }
});
deleteBtn.addEventListener("click", () => {
    document.querySelector('.toggleOrder').style.display = "none"
    amount = 0;
    document.querySelector("#empty").style.display = "flex";
    document.querySelector(".toggleOrder-footer").style.display = "none";
    cartSpan.textContent = amount;

});
if (amount == 0 ){
    cartSpan.style.display = "none";
}
cartBtn.addEventListener("click", () => {
    if (cartToggle.style.display == "block") {
        cartToggle.style.display = "none";
    } else {
        cartToggle.style.display = "block";
    }
});
profileBtn.addEventListener("click", () => {
    if (cartToggle.style.display == "block") {
        cartToggle.style.display = "none";
    } else {
        cartToggle.style.display = "block";
    };
});



let barToggleContainer = document.querySelector(".bar-container");
barToggleContainer.addEventListener("click", () => {
    barToggleContainer.style.display = "none";
    document.querySelector(".image-toggles").style.display = "none";
    document.querySelector(".bar-toggle").style.display = "none";
})
let closeBtnImages = document.querySelector("#closeBtnToggle");
closeBtnImages.addEventListener('click', () => {
    barToggleContainer.style.display = "none";
    document.querySelector(".image-toggles").style.display = "none";
});

let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");
let img9 = document.querySelector("#img9");

img6.addEventListener("click", () =>{
    imgT1.style.display = "flex";
    imgT2.style.display = "none";
    imgT3.style.display = "none";
    imgT4.style.display = "none";
    imgT5.style.display = "none";
});
img7.addEventListener("click", () =>{
    imgT1.style.display = "none";
    imgT2.style.display = "flex";
    imgT3.style.display = "none";
    imgT4.style.display = "none";
    imgT5.style.display = "none";
});
img8.addEventListener("click", () =>{
    imgT1.style.display = "none";
    imgT2.style.display = "none";
    imgT3.style.display = "flex";
    imgT4.style.display = "none";
    imgT5.style.display = "none";
});
img9.addEventListener("click", () =>{
    imgT1.style.display = "none";
    imgT2.style.display = "none";
    imgT3.style.display = "none";
    imgT4.style.display = "flex";
    imgT5.style.display = "none";
});
img7.addEventListener("click", () =>{
    imgT1.style.display = "none";
    imgT2.style.display = "flex";
    imgT3.style.display = "none";
    imgT4.style.display = "none";
    imgT5.style.display = "none";
});
let imgT1 = document.querySelector("#imgT1");
let imgT2 = document.querySelector("#imgT2");
let imgT3 = document.querySelector("#imgT3");
let imgT4 = document.querySelector("#imgT4");
let imgT5 = document.querySelector("#imgT5");

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");

img1.addEventListener("click", () => {
    barToggleContainer.style.display = "flex";
    document.querySelector(".image-toggles").style.display = "block";
});

img2.addEventListener("click", () => {
    barToggleContainer.style.display = "flex";
    document.querySelector(".image-toggles").style.display = "block";
});
img3.addEventListener("click", () => {
    barToggleContainer.style.display = "flex";
    document.querySelector(".image-toggles").style.display = "block";
});
img4.addEventListener("click", () => {
    barToggleContainer.style.display = "flex";
    document.querySelector(".image-toggles").style.display = "block";
});
img5.addEventListener("click", () => {
    barToggleContainer.style.display = "flex";
    document.querySelector(".image-toggles").style.display = "block";
});
let barHamburg = document.querySelector("#hamburgBtn");
barHamburg.addEventListener("click", () => {
    document.querySelector(".bar-toggle").style.display = "block"
    barToggleContainer.style.display = "flex";
    document.querySelector(".cart-toggle").style.display = "none";
});
let HamburgClose = document.querySelector("#closeHamburgBtn");
HamburgClose.addEventListener('click',() => {
    document.querySelector(".bar-toggle").style.display = "none";
    barToggleContainer.style.display = "none";
});