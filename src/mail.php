<?php
  $name=$_POST['name'];
  $lastName=$_POST['lastName'];
  $national=$_POST['national'];
  $email=$_POST['email'];
   

  $to = "elena.vakhrusheva92@yandex.ru";
  $subject = "Заявка с сайта";
  $message = "
  Имя пользователя: ".htmlspecialchars($name)."</br>
  Email: ".htmlspecialchars($email)." </br>
  Сообщение: ".htmlspecialchars($lastName).htmlspecialchars($national)

  $headers = "From: Test task \r\nContent-type:text/html; charset=UTF-8 \r\n";
  mail($to, $subject, $message, $headers);
  header("Location: thanks.html")
?>