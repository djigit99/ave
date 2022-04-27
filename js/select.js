function SaveSelectValue(el) {
    return localStorage.setItem(el.name, el.value);
}
function LoadSelectValue(el) {
    return localStorage.getItem(el.name);
}

let selectCheck = document.querySelector("[name='user_profile_color_1']");
selectCheck.value =
    LoadSelectValue(selectCheck) === null ? "£" : LoadSelectValue(selectCheck);

var currency = document.getElementById("header__select");
const start_prices = [...document.querySelectorAll(".price__price")];

function getPriceValues(el) {
    const vals = [];
    el.forEach((i) => vals.push(Number(i.innerHTML)));
    return vals;
}

const funt_prices = getPriceValues(start_prices);
const dollar_prices = [...funt_prices];
const euro_prices = [...funt_prices];

for (let i = 0; i < funt_prices.length; i++) {
    funt_prices[i] *= 1.0;
}

for (let i = 0; i < euro_prices.length; i++) {
    euro_prices[i] *= 1.18;
    euro_prices[i] = euro_prices[i].toFixed(2);
}

for (let i = 0; i < dollar_prices.length; i++) {
    dollar_prices[i] *= 1.26;
    dollar_prices[i] = dollar_prices[i].toFixed(2);
}
function Save() {
    [...document.querySelectorAll(".price__currency")].forEach((i) => {
        i.innerHTML =  LoadSelectValue(selectCheck) === null ? "£" : LoadSelectValue(selectCheck);
    });
    if (LoadSelectValue(selectCheck) === "$") {
        for (let i = 0; i < start_prices.length; i++) {
            start_prices[i].innerHTML = String(dollar_prices[i]);
        }
    } else if (LoadSelectValue(selectCheck) === "€") {
        for (let i = 0; i < start_prices.length; i++) {
            start_prices[i].innerHTML = String(euro_prices[i]);
        }
    } else {
        for (let i = 0; i < start_prices.length; i++) {
            start_prices[i].innerHTML = String(funt_prices[i]);
        }
    }
}
Save();

currency.addEventListener("change", function () {
    Save();
});
