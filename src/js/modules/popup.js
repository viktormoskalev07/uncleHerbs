const popupAge = document.querySelector(".popup-age");
const popupAgeText = document.querySelector(".popup-age__text");
const popupBtnYes = document.querySelector(".button-age__yes-js")
const popupBtnNo = document.querySelector(".button-age__no-js")

localStorage.getItem("age") ? document.body.classList.remove("bloked-by-popup-age") : (document.body.classList.add("bloked-by-popup-age"),
popupAge.style.display = "flex");


function closePopupAge() {
    localStorage.setItem("age", "true"),
    popupAge.style.display = "none",
    document.body.classList.remove("bloked-by-popup-age")
}

function noPopupAge() {
    popupAgeText.innerHTML = "Sorry, come back when you're 21.",
    document.querySelector(".buttons-age-js").innerHTML = ""
}

popupBtnYes.addEventListener("click", closePopupAge),
popupBtnNo.addEventListener("click", noPopupAge);


