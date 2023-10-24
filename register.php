<?php
// Connetti al database
$servername = "sql11.freesqldatabase.com"; // Sostituisci con il tuo host del database
$username = "sql11655732"; // Sostituisci con il tuo nome utente del database
$password = "bZRwqR4UzX"; // Sostituisci con la tua password del database
$dbname = "Utenti"; // Sostituisci con il nome del tuo database

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

// Recupera il nickname inviato dal modulo
$nickname = $_POST['nickname'];

// Esegui l'inserimento nel database
$sql = "INSERT INTO tabella_nickname (nickname) VALUES ('$nickname')";

if ($conn->query($sql) === TRUE) {
    echo "Registrazione avvenuta con successo";
} else {
    echo "Errore durante la registrazione: " . $conn->error;
}

// Chiudi la connessione al database
$conn->close();
?>
