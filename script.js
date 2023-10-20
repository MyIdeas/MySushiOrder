// Esempio di gestione del click del pulsante
document.getElementById('submitButton').addEventListener('click', function () {
    var inputText = document.getElementById('inputField').value;

    if (inputText.trim() === '') {
        document.getElementById('errorMessage').textContent = 'Il campo non può essere vuoto.';
    } else {
        document.getElementById('errorMessage').textContent = ''; // Cancella il messaggio di errore se il campo è valido

        // Esegui l'azione desiderata quando il campo non è vuoto
        // Puoi inserire qui il codice per gestire il testo inserito
    }

    //alert('Hai inserito: ' + inputText);  non mi serve, è il sito che dice con un pop up ma è brutto
});
