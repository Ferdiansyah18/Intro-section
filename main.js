let featuresMenu = document.getElementById("featuresDropDown");
let companyMenu = document.getElementById("companyDropDown");
let featuresBtn = document.getElementById("featuresBtn");
let companyBtn = document.getElementById("companyBtn");

function featDropBtn() {
    featuresMenu.classList.toggle("active");
    featuresBtn.classList.toggle("active")
}

function companyDropBtn() {
    companyMenu.classList.toggle("active");
    companyBtn.classList.toggle("active")
}