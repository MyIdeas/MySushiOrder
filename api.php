<?php
$servername = "sql11.freesqldatabase.com";
$database = "sql11655732";
$username = "sql11655732";
$password = "bZRwqR4UzX";
$port = 3306;

// Connessione al database MySQL
$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name'])) {
        $name = $_POST['name'];

        // Esegui le operazioni per inserire il nome nel database
        // Ad esempio, puoi usare query SQL per inserire il nome nel tuo database

        // Invia una risposta, ad esempio JSON
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
    } elseif (isset($_POST['number'])) {
        $number = $_POST['number'];

        // Esegui le operazioni per inserire il numero nel database
        // Ad esempio, puoi usare query SQL per inserire il numero nel tuo database

        // Invia una risposta, ad esempio JSON
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
    }
}

$conn->close();
?>
