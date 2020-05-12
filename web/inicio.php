<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cpainel - Início</title>
<script type="text/javascript" src="mootools-core-1.4.2-full-compat-yc.js"></script>
<link href="estilo.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
window.addEvent('domready',function() {
  var togglers = $$('div.toggler');
  if(togglers.length) var gmail = new Fx.Accordion(togglers,$$('div.body'));
  togglers.addEvent('click',function() { this.addClass('read').removeClass('unread'); });
  togglers[0].fireEvent('click');
});
</script>

</head>

<body onload="tabela();">
<div id="top">
<table width="98%" height="50px" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="left" valign="middle"><strong> &nbsp; CPainel 3.0</strong></td>
    <td align="right" valign="middle">Bem-Vindo. Clique <a href="index.php">AQUI</a> se quiser sair.&nbsp;</td>
  </tr>
  </table>
</div>
<table width="100%" border="0" cellspacing="0" cellpadding="0" height="100%" >
  <tr align="center" valign="middle">
    <td colspan="3" align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="left" valign="middle" class="tab" background="imagens/bkgtab.jpg" height="22px">&nbsp;&nbsp;<span class="btn">&nbsp;Ler email&nbsp;</span><span class="btn"> &nbsp;Enviar email&nbsp;</span></td>
      </tr>
      <tr>
        <td align="center" valign="middle">
          <div class="ler">
<?php
/* try to connect */
$mbox = imap_open("{imap.gmail.com:993/imap/ssl}INBOX",$_GET["email"],$_GET["senha"]) or die('Impossivel conectar: ' . imap_last_error());

echo "<p><h1>Mailboxes</h1>\n";
$folders = imap_listmailbox ($mbox, "{your.imap.host:143}", "*");

if ($folders == false) {
    echo "Call failed<br>\n";
} else {
    while (list ($key, $val) = each ($folders)) {
        echo $val."<br>\n";
    }
}

echo "<p><h1>Headers in INBOX</h1>\n";
$headers = imap_headers ($mbox);

if ($headers == false) {
    echo "Call failed<br>\n";
} else {
    while (list ($key,$val) = each ($headers)) {
        echo $val."<br>\n";
    }
}

imap_close($mbox);
?>
</div>
          <div class="mandar">&nbsp;</div></td>
      </tr>
    </table></td>
  </tr>
</table>
</body>
</html>