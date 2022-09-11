const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const formSubmit = document.querySelector("#handle-form")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];





formSubmit.addEventListener("submit", function validateBillAndCashAmount(e) {
    e.preventDefault()
    hideMessage();

    if (billAmount.value === cashGiven.value) {
        showMessage("No change to be returned");
    }
    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {

            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}