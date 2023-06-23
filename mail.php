<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $to = "lemishkodima@gmail.com";
    $subject = 'Заявка на підбір авто';
    $message = "Контакті данні особи, що цікавиться підбором авто.\nІм'я: " . $name . "\n" . "Номер телефону: " . $phone;
    $headers = "From: lemishkodima@gmail.com";

    $send = mail($to, $subject, $message, $headers);

    if ($send) {
        http_response_code(200);
        echo json_encode('success');
    } else {
        http_response_code(400);
        echo json_encode('error');
    }
}
?>