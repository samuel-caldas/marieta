
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">
function logo(imagem,x,y)
		{ 
				var wimg = document.getElementById(imagem).width;
				var himg = document.getElementById(imagem).height;
				var wtela = window.innerWidth;
				var htela = window.innerHeight;
				var wf = ((wtela-wimg)/x);
				var hf= ((htela-himg)/y);
				document.getElementById(imagem).style.left=wf+'px';
				document.getElementById(imagem).style.top=hf+'px';
				document.getElementById(imagem).style.width=(wtela/2)+'px';
				document.getElementById(imagem).style.height=(htela/2)+'px';
		};
	function loading(){
		document.getElementById("loading").style.width=window.innerWidth+'px';
		document.getElementById("loading").style.height=window.innerHeight+'px';
		document.getElementById("loading").style.visibility="visible";
		document.getElementById("cpainel").style.visibility="hidden";
		
	};
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CPainel - Login</title>
<link href="estilo.css" rel="stylesheet" type="text/css" />
<noscript>
Ops! Por favor verifique se seu JavaScript esá desativado ou se seu browser é compativel.<br />
Algumas funçoes podem ficar temporariamente destaivadas até o problema ser resolvido.
</noscript>
</head>
<body onload="logo('cpainel',2,2);" onresize="logo('cpainel',2,2);">
<div id="top">
<table width="99%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="right" valign="middle">
	<form action="inicio.php" method="post">
    	<table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><input name="email" type="text" id="email" size="20" placeholder="E-mail" />&nbsp;&nbsp;</td>
            <td><input name="senha" type="password" id="senha" size="20" maxlength="8" placeholder="Senha"/>&nbsp;&nbsp;</td>
            <td><a onclick="loading();"><input name="Login" type="submit"/></a>&nbsp;&nbsp;</td>
          </tr>
        </table>
	</form>
    </td>
  </tr>
  </table>
</div>
<img src="imagens/logo.gif" name="cpainel" id="cpainel" style="position:absolute" />
<div id="loading" class="tela">
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" valign="middle">
    	<img src="imagens/loading.gif" width="150" height="150" align="absmiddle" />
    </td>
  </tr>
</table>
</div>
<iframe name="login" allowtransparency="true" width="0px" height="0px" style="width:0px; height:0px; border:0px; visibility:hidden;"></iframe>
</body>
</html>

