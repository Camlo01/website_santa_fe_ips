<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    // Configuración contenido de correo
    $to = "correo@example.com";
    $subject = "PQR: " . $_POST['reason'];
    $content = " - Mensaje de PQR " . $_POST['reason'] . "- <br>
                Nombre: " . $_POST['name'] . "<br>
                Email: " . $_POST['email'] . "<br>
                Teléfono: " . $_POST['phone'] . "<br>
                Mensaje: " . $_POST['description'];
    $header = "From: $email";


    if (!isValidEmail($_POST["email"])) {

    }
    if (!isAcceptedTerms($_POST['terms'])) {

    }

    echo '<br>';
    echo $to;
    echo '<br>';
    echo $subject;
    echo '<br>';
    echo $content;
    echo '<br>';
    echo $header;
    echo '<br>';
    echo '<br>';
    echo '<br>';



    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //Validate terms and conditions
        if ($_POST['terms'] == 'on') {
            echo "<h1>¡El mensaje se ha enviado con éxito!</h1>";
        } else {
            echo 'Debes aceptar los términos y condiciones para enviar el formulario';
        }
    }


    /**
     * Mehotd in charge of validate email
     */
    function isValidEmail($email)
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true; // El correo es válido
        } else {
            return false; // El correo no es válido
        }
    }

    /**
     * Validate  that the terms were selected
     */
    function isAcceptedTerms($value)
    {
        if ($value == 'on') {
            return true;
        } else {
            return false;
        }
    }


 






    //Final message
    
    echo "<h2>Regresando en 5 segundos...</h2>";
    echo '<script>

    setTimeout(() => {
        window.history.go(-1);
    }, 5000);
                    
    </script>';
    ?>

</body>

</html>

<?php
