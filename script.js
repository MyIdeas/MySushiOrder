// Esempio di gestione del click del pulsante
document.getElementById('submitButton').addEventListener('click', function () {
    var inputText = document.getElementById('inputField').value;

    if (inputText.trim() === '') {
        document.getElementById('errorMessage').textContent = 'Il campo non può essere vuoto.';
    } else {
        document.getElementById('errorMessage').textContent = ''; // Cancella il messaggio di errore se il campo è valido

        // Cambia schermata mostrando la "seconda schermata"
        document.querySelector('.second-screen').style.display = 'block';

        // Puoi inserire qui il codice per la seconda schermata o visualizzazione
   
    }

    //alert('Hai inserito: ' + inputText);  non mi serve, è il sito che dice con un pop up ma è brutto
});
