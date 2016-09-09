var bot3 = function () {
  try {
  var p = gameMap.listeJoueurs.find(gameCore.playerId);
  var l = gameMap.listeZombies.tab;
  var d = 1000000; var tz = undefined;
  for (i = 0 ; i < l.length ; i++) {
    var z = l[i];
    if (z.alive && z.x > 0 && z.y > 0) {
      var td = Math.sqrt ((p.x - z.x)*(p.x - z.x) + (p.y - z.y)*(p.y - z.y));
      if (td < d) { tz = z; d = td; }
    }
  } var p2 = tz; if (!tz) p2 = {x : 1000, y : 500};
  if (Math.abs (p2.y - p.y) > 100) { 
  if (p2.y > p.y) { gameCore.directions.haut = false; gameCore.directions.bas = true; }
  else if (p2.y <= p.y) { gameCore.directions.haut = true; gameCore.directions.bas = false; } 
  }
  else if (p2.y < p.y) { gameCore.directions.haut = false; gameCore.directions.bas = true; }
  else if (p2.y >= p.y) { gameCore.directions.haut = true; gameCore.directions.bas = false; }
  if (Math.abs (p2.x - p.x) > 100) { 
  if (p2.x > p.x) { gameCore.directions.gauche = false; gameCore.directions.droite = true; }
  else if (p2.x <= p.x) { gameCore.directions.gauche = true; gameCore.directions.droite = false; }

  }
  else if (p2.x < p.x) { gameCore.directions.gauche = false; gameCore.directions.droite = true; }
  else if (p2.x >= p.x) { gameCore.directions.gauche = true; gameCore.directions.droite = false; }
  gameCore.updateMouvement ();
   } catch (e) {};
  timeoutbot = setTimeout (bot3, 20);
};

var start3 = function () { timeoutbot = setTimeout (bot3, 100); };
var stop3  = function () { clearTimeout (timeoutbot); };

var bot1 = function () {

  try {
  var l = gameMap.listeZombies.tab;
  var p = gameMap.listeJoueurs.find(gameCore.playerId);
  var d = 1000000; var tz = l[0];
  for (i = 0 ; i < l.length ; i++) {
    var z = l[i];
    if (z.alive) {
      var td = Math.sqrt ((p.x - z.x)*(p.x - z.x) + (p.y - z.y)*(p.y - z.y));
      if (td < d) { tz = z; d = td; }
    }
  }
  o = Math.abs (tz.y - p.y);
  a = Math.asin (o/(d+0.001))*180/Math.PI;
  if (tz.y < p.y && tz.x > p.x) a *= -1; else if (tz.y < p.y && tz.x < p.x) a+=180; else if (tz.y > p.y && tz.x < p.x) a = 180 - a;    gameCore.fire (tz.x, tz.y);
  gameCore.updateAngle (a);
  } catch (e) {};
  timeoutbot = setTimeout (bot1, 20);
};

var timeoutbot;
var start1 = function () { timeoutbot = setTimeout (bot1, 100); };
var stop1  = function () { clearTimeout (timeoutbot); };

var bot2 = function () {
  try {
  var p = gameMap.listeJoueurs.find(gameCore.playerId);
  var l = gameMap.listeJoueurs.tab;
  var p2 = gameMap.listeJoueurs.tab[0];
  if (p2.id == p.id) p2 = gameMap.listeJoueurs.tab[1];
  for (var i = 0 ; i < l.length ; i++) { if (l[i].pseudo == "kkkkkk") { p2 = l[i]; break; }}
  if (Math.abs (p2.y - p.y) < 10) { gameCore.directions.haut = false; gameCore.directions.bas = false; }
  else if (p2.y > p.y) { gameCore.directions.haut = false; gameCore.directions.bas = true; }
  else if (p2.y < p.y) { gameCore.directions.haut = true; gameCore.directions.bas = false; }
  else { gameCore.directions.haut = false; gameCore.directions.bas = false; }
  if (Math.abs (p2.x - p.x) < 10) { gameCore.directions.gauche = false; gameCore.directions.droite = false; }
  else if (p2.x > p.x) { gameCore.directions.gauche = false; gameCore.directions.droite = true; }
  else if (p2.x < p.x) { gameCore.directions.gauche = true; gameCore.directions.droite = false; }
  else { gameCore.directions.gauche = false; gameCore.directions.droite = false; }
  gameCore.updateMouvement ();
  console.log ("Move!"); } catch (e) {};
  timeoutbot = setTimeout (bot2, 20);
};
var tchat = [];
var hack_tchat = function () {
tchat[0] = gameCore.tchat;
gameCore.tchat = function (datas) { if (datas.Message == "t") gameCore.launchCapa (0); 
                                    else if (datas.Message == "s") gameCore.spectateurOn ();
                                    else if (datas.Message == "p") gameCore.spectateurOff ();

tchat[0] (datas); };
gameCore.changeMap (31);
}
var start2 = function () { timeoutbot = setTimeout (bot2, 100); };
var stop2  = function () { clearTimeout (timeoutbot); };
var new1 = function () { lancerPartie("kkkkkk", "mdp", false); start1 (); setTimeout (hack_tchat, 1000); }
var new2 = function () { lancerPartie("PP", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000); }
var new3 = function () { lancerPartie("ZZZ", "mdp", false); start1 (); start2 ();setTimeout (hack_tchat, 1000); }
var new4 = function () { lancerPartie("PPP", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000);}
var new5 = function () { lancerPartie("PPPP", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000);}
var new7 = function () { lancerPartie("MM", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000); }
var new6 = function () { lancerPartie("MP", "mdp", false); start1 (); setTimeout (hack_tchat, 1000);}
var new8 = function () { lancerPartie("MMMM", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000); }
var new9 = function () { lancerPartie("MMMMM", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000); }
var new10 = function (){ lancerPartie("MMMMMM", "mdp", false); start1 (); start2 (); setTimeout (hack_tchat, 1000); }

