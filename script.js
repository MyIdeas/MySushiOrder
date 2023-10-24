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

// Pagina di accesso
// Pagina di accesso
const loginForm = document.getElementById("loginForm");
const userName = document.getElementById("name");
const numberForm = document.getElementById("numberForm");
const sendNumberButton = document.getElementById("sendNumber");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userName.value;

    // Creiamo un oggetto che rappresenta i dati da inviare al server
    const data = {
        name: name
    };

    // Utilizziamo la funzione fetch() per inviare una richiesta POST al server PHP
    fetch('https://sql11.freesqldatabase.com:3306/api.php', {
        method: 'POST',
        body: JSON.stringify(data),  // Convertiamo l'oggetto in una stringa JSON
        headers: {
            'Content-Type': 'application/json',  // Specifichiamo il tipo di contenuto
        },
    })
    .then(response => response.json())  // Analizziamo la risposta JSON
    .then(data => {
        if (data.success) {
            userName.textContent = name;
            loginForm.style.display = 'none';
            numberForm.style.display = 'block';
        }
    });
});

// Pagina dei numeri
const numberInput = document.getElementById("number");
const numberList = document.getElementById("numberList");

sendNumberButton.addEventListener("click", () => {
    const number = parseInt(numberInput.value);

    // Creiamo un oggetto che rappresenta i dati da inviare al server
    const data = {
        number: number
    };

    // Utilizziamo la funzione fetch() per inviare una richiesta POST al server PHP
    fetch('https://sql11.freesqldatabase.com/api.php', {
        method: 'POST',
        body: JSON.stringify(data),  // Convertiamo l'oggetto in una stringa JSON
        headers: {
            'Content-Type': 'application/json',  // Specifichiamo il tipo di contenuto
        },
    })
    .then(response => response.json())  // Analizziamo la risposta JSON
    .then(data => {
        if (data.success) {
            numberList.innerHTML += `<li>${number}</li>`;
            numberInput.value = "";
        }
    });
});
