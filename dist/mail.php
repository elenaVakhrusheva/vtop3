<?
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
    $message = 'Name: ' . $_POST['name'] . ' ';
    $message = 'lastName: ' . $_POST['lastName'] . ' ';
    $message .= 'Телефон: ' . $_POST['phone'] . ' ';
    if(!empty($_POST['text'])) {
        $message .= 'Текст: ' . $_POST['text'] . ' ';
    }
    $mailTo = "elena.vakhrusheva92@yandex.ru"; // Ваш e-mail
    $subject = "Письмо с сайта"; // Тема сообщения
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: info@site.ru <info@site.ru>\r\n";
    if(mail($mailTo, $subject, $message, $headers)) {
        echo "Спасибо, ".$_POST['name'].", мы свяжемся с вами в самое ближайшее время!"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }
}
?>