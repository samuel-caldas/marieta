<html>
<head>
<title>Email - Marieta Salgados</title>
</head>
<body>
<?php
$opt="samuel.caldas@gmail.com";
$nome="samuel.caldas@gmail.com";
$email="samuel.caldas@gmail.com";
$fone="samuel.caldas@gmail.com";
$assunto="samuel.caldas@gmail.com";
$msg="samuel.caldas@gmail.com";
$site="samuel.caldas@gmail.com";
//error_reporting(E_ALL);
error_reporting(E_STRICT);
date_default_timezone_set('America/Toronto');
require_once('class.phpmailer.php');
$mail             	= new PHPMailer();
//--DE:--------------------------------------------
$nomei				='Marieta Salgados';
$emailr				='contato@marietasalgados.com.br';
$senhar				='marieta123';
//--Mensagem:-----------------------------------------
$titulo				="Formulario de contato do site: ".$site;
$AVISO				="Para visualizar a mensagem, por favor use um visualizador de e-mail HTML!";
//--Corpo da mensagem----------------------------------------------------------------------------
$conteudo	= "
MIME-Version: 1.0\n		Content-type: text/html; charset=iso-8859-1\n
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<title>Formulario de Email</title>
<style>
*{
	margin:0px;
	padding:0px;
	background-color:#CCCCCC;
	font-family:Verdana, Geneva, sans-serif;
}
</style>
</head>

<body bgcolor='#CCCCCC' text='#333333' link='#333333' vlink='#333333' alink='#333333' leftmargin='0px' topmargin='0px' marginwidth='0px' marginheight='0px'>
Nome: ".$nome."<br />
Email: ".$email."<br />
Fone: ".$fone."<br />
Assunto: ".$assunto."<br />
<b> ".$opt."</b><br />
Mensagem: ".$msg."<br />
</body>
</html>
";
//--Para:--------------------------------------------------------------------------------------------------
$destinatarioemail	= $opt;
$destinatarionome	= $opt;
//--Configurações------------------------------------------------------------------------------------------
$mail->IsSMTP(); 											// telling the class to use SMTP
$mail->Host       	= "smtp.marietasalgados.com.br";						// SMTP server
$mail->SMTPDebug  	= 1;                     				// enables SMTP debug information (for testing)
															// 1 = errors and messages
															// 2 = messages only
$mail->SMTPAuth   	= true;									// enable SMTP authentication
$mail->SMTPSecure 	= "ssl";								// sets the prefix to the servier
$mail->Host       	= "smtp.marietasalgados.com.br"; 					// sets the SMTP server
$mail->Port       	= 587;                    				// set the SMTP port for the GMAIL server
$mail->Username   	= $emailr;								// SMTP account username
$mail->Password   	= $senhar;      						// SMTP account password
$mail->SetFrom($emailr, $nomei);
$mail->AddReplyTo($emailr, $nomei);
$mail->Subject    	= $titulo;
$mail->AltBody    	= $AVISO;								// optional, comment out and test
$mail->MsgHTML($conteudo);
$mail->AddAddress($destinatarioemail, $destinatarionome);
//--Enviando------------------------------------------------------------------------------------------------
if(!$mail->Send()) {
  echo("
	<script type='text/javascript'>
		window.alert('Erro: " . $mail->ErrorInfo . "');
	</script>
	");
} else {
  echo("
	<script type='text/javascript'>
		window.alert('Mensagem enviada com sucesso!');
	</script>
	");
}
?>
</body>
</html>
