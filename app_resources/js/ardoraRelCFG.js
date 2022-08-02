//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#35B4CA"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Ganaste!!!"; messageTime="60"; messageError="Sigue intentando!!"; messageErrorG="Sigue intentando!!"; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YXBw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Cuadrado</p>","<p>Triangulo</p>","<p>Circulo</p>","<p>Rectangulo</p>"];
var iL=["","","",""];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["","","",""]; ansRL=["MA==","MQ==","Mg==","Mw=="];
var iR=["<div  align='center'><img alt='' src='app_resources/media/cuadrado.jpg'></div>","<div  align='center'><img alt='' src='app_resources/media/Triangulo.jpg'></div>","<div  align='center'><img alt='' src='app_resources/media/circulo.png'></div>","<div  align='center'><img alt='' src='app_resources/media/rectangulo.png'></div>"];
var auR=[1,2,3,4];
