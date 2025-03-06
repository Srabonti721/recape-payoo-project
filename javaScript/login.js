
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountnumber = document.getElementById('Account-Number').value;
    const Pin = document.getElementById("Pin").value;
    convertedPin = parseInt(Pin);
    if (accountnumber.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = "./main.html"
        }
        else {
            alert("include a valid pin number")
        }
    }
    else {
        alert('account number thik nai')
    }
})
