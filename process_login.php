<?php
// Connessione al database
$host = 'sql11.freesqldatabase.com';
$database = 'sql11655732';
$username = 'sql11655732';
$password = 'bZRwqR4UzX';
$port = 3306;

$connection = mysqli_connect($host, $username, $password, $database, $port);

if (!$connection) {
    die("Connessione al database fallita: " . mysqli_connect_error());
}

// Gestisci l'invio del modulo
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];

    // Esegui l'inserimento nel database
    $query = "INSERT INTO Utenti (Nome) VALUES ('$username')";
    $result = mysqli_query($connection, $query);

    if ($result) {
        echo "Registrazione avvenuta con successo!";
    } else {
        echo "Errore durante la registrazione: " . mysqli_error($connection);
    }

    mysqli_close($connection);
}
?>
