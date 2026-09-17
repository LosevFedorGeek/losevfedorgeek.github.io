<?php

declare(strict_types=1);

ob_start();

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_clean();
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$honeypot = filter_input(INPUT_POST, 'website_hp', FILTER_DEFAULT);
if (!empty($honeypot)) {
    ob_clean();
    echo json_encode(['status' => 'success', 'message' => '✓ Ваша заявка принята!'], JSON_UNESCAPED_UNICODE);
    exit;
}

$name = trim((string) filter_input(INPUT_POST, 'name', FILTER_DEFAULT));
$contact = trim((string) filter_input(INPUT_POST, 'contact', FILTER_DEFAULT));
$message = trim((string) filter_input(INPUT_POST, 'message', FILTER_DEFAULT));

if (empty($name) || mb_strlen($name) < 2) {
    ob_clean();
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, укажите имя от 2 символов.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (empty($contact) || mb_strlen($contact) < 4) {
    ob_clean();
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, укажите корректный телефон или Email.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeContact = htmlspecialchars($contact, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message ?: 'Не указано', ENT_QUOTES, 'UTF-8');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'Unknown IP';
$dateNow = date('d.m.Y H:i:s');

$toEmail = 'losevfedor287@gmail.com';
$emailSubject = '=?UTF-8?B?' . base64_encode("Новая заявка с сайта: {$safeName}") . '?=';

$emailBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Новая заявка</title>
</head>
<body style='font-family: Arial, sans-serif; background-color: #0b0c0e; color: #f4f4f6; margin: 0; padding: 24px;'>
  <div style='max-width: 580px; margin: 0 auto; background-color: #16181d; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 28px;'>
    <h2 style='color: #939b76; margin-top: 0; font-size: 20px;'>Новая заявка на разработку</h2>
    <p style='margin: 12px 0; font-size: 15px;'><strong>Имя / Компания:</strong> {$safeName}</p>
    <p style='margin: 12px 0; font-size: 15px;'><strong>Контакт:</strong> {$safeContact}</p>
    <p style='margin: 12px 0; font-size: 15px;'><strong>Детали задачи:</strong><br />" . nl2br($safeMessage) . "</p>
    <hr style='border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;' />
    <small style='color: #8b909a;'>Время: {$dateNow} | IP: {$ipAddress}</small>
  </div>
</body>
</html>
";

$replyTo = filter_var($safeContact, FILTER_VALIDATE_EMAIL) ? $safeContact : $toEmail;

$emailHeaders = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: portfolio@losev.dev',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion()
];

$mailSent = @mail($toEmail, $emailSubject, $emailBody, implode("\r\n", $emailHeaders));

ob_clean();
http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => '✓ Заявка успешно отправлена! Федор свяжется с вами в ближайшее время.'
], JSON_UNESCAPED_UNICODE);
