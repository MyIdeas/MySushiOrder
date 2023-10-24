// Esempio di gestione del click del pulsante
/*document.getElementById('submitButton').addEventListener('click', function () {
    var inputText = document.getElementById('inputField').value;

    if (inputText.trim() === '') {
        document.getElementById('errorMessage').textContent = 'Il campo non può essere vuoto.';
    } else {
        document.getElementById('errorMessage').textContent = 'Giulia pigrona'; // Cancella il messaggio di errore se il campo è valido

        // Cambia schermata mostrando la "seconda schermata"
        //document.querySelector('.second-screen').style.display = 'block';
        // Puoi inserire qui il codice per la seconda schermata o visualizzazione
   
    }

    //alert('Hai inserito: ' + inputText);  non mi serve, è il sito che dice con un pop up ma è brutto
});*/

// ... Altre parti del tuo codice ...

// Funzione per mostrare il feedback
function showFeedback(message, success) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.style.color = success ? "green" : "red";
    feedback.style.display = "block";

    setTimeout(() => {
        feedback.style.display = "none";
    }, 3000);  // Nascondi il feedback dopo 3 secondi
}

// Pagina di accesso
const loginForm = document.getElementById("loginForm");
const userName = document.getElementById("name");
const numberForm = document.getElementById("numberForm");
const sendNumberButton = document.getElementById("sendNumber");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userName.value;

    const data = {
        name: name
    };

    fetch('https://sql11.freesqldatabase.com/api.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            userName.textContent = name;
            loginForm.style.display = 'none';
            numberForm.style.display = 'block';
            showFeedback("Accesso riuscito", true);
        } else {
            showFeedback("Accesso fallito", false);
        }
    });
});

// Pagina dei numeri
const numberInput = document.getElementById("number");
const numberList = document.getElementById("numberList");

sendNumberButton.addEventListener("click", () => {
    const number = parseInt(numberInput.value);

    const data = {
        number: number
    };

    fetch('https://sql11.freesqldatabase.com/api.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            numberList.innerHTML += `<li>${number}</li>`;
            numberInput.value = "";
            showFeedback("Dato inviato con successo", true);
        } else {
            showFeedback("Invio del dato fallito", false);
        }
    });
});
