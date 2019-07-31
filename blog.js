var usuario = prompt("Introduce en numero de HP a convertir");
var hp = parseInt(usuario);
var mult = 0.75;
var kw = 0;
kw = hp * mult;
document.write("<strong> " + hp + "HP</strong>" +  " = <strong>" + kw + "KW</strong>")
