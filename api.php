<?php
$servername = "sql11.freesqldatabase.com"; // Sostituisci con il tuo host del database
$username = "sql11655732"; // Sostituisci con il tuo nome utente del database
$password = "bZRwqR4UzX"; // Sostituisci con la tua password del database
$dbname = "sql11655732"; // Sostituisci con il nome del tuo database

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $number = $_POST['number'];

    // Esegui le operazioni per inserire il nome e i numeri nel database
    // Ad esempio, puoi usare query SQL per inserire i dati nel tuo database

    // Invia una risposta, ad esempio JSON
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}

$conn->close();
?>
