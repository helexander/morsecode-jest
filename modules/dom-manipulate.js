const alertItem = document.querySelector(".alert");
const result = document.getElementById("block__result");

export const displayAlert = () => {

    // alertItem.style.visibility = "visible";
    alert("Invalid input");
}

export const displayResult = (str) => {
    result.value = str;
}