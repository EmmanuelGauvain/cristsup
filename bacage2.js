document.getElementById("etat").innerHTML = "Please import bacteria."; 
document.getElementById("years").innerHTML = "Year : 0"; 
document.getElementById("laptotal").innerHTML = "Total population : 0"; 
document.getElementById("cres1").innerHTML = "First bacteria damage"; 

var long
var pauser
var poplap
var annees
poplap1 = 1
poplap2 = 0
poplap3 = 0
poplap4 = 0
poplap5 = 0
poplap6 = 0
npoplap1 = 0
npoplap2 = 0
npoplap3 = 0
npoplap4 = 0
npoplap5 = 0
npoplap6 = 0
oldnpoplap1 = 0
laptotal = 0
fertility = 0.9
fertility2 = 0.6
popcres1 = 0
popcres2 = 0
popcres3 = 0
popcrestotal = 5000
eatencres = 0
newcres = 0
annees = 0
morts = 0
prop1 = 100
prop2 = 0
prop3 = 0
prop4 = 0
prop5 = 0
prop6 = 0
var decompte = [0];
var decpop = [1];
var deccres = [0];
var decrap = [0];
var decroot = [0];
rapport = 1
long = 6
var hasard
hasard = Math.random()+1
comptage = 0

var bacpop = []; 
var comptenom
comptenom = 0
var longueur
longueur = 0
long2 = 0
firstdam = 0
premierdam = 0
trentedam = 0
nbgen = 0
food = 50000
reserve = 0
vardamage = 5
rootdamage = 5

function Generation(quant, damage) {
    this.quant = quant;
    this.damage = damage;
}

var data = [
  {
    x: ["0-1 yrs", "1-2 yrs", "2-3 yrs", "3-4 yrs", "4-5 yrs", "5-6 yrs", "Total"],
    y: [poplap1, poplap2, poplap3, poplap4, poplap5, poplap6, laptotal],
    type: 'bar'
  }
];

Plotly.newPlot('tester', doublegraph);

function long6() { 
vardamage = 20
}
function long5() { 
vardamage = 10
}
function long4() { 
vardamage = 5
}
function long3() { 
vardamage = 2
}


function msg() { var gogo = setInterval(function () {

document.getElementById("etat").innerHTML = "You've just imported one cell."; 
annees++

document.getElementById("years").innerHTML = "Year : "+annees; 
document.getElementById("laptotal").innerHTML = "Bacteria, all ages : "+longueur; 
document.getElementById("textfert").innerHTML = "FOOD : "+food+" kg - RESERVE : "+reserve;
document.getElementById("textlong").innerHTML = "Damage is at "+rootdamage+" CRB";



// 0. bacteria divide //


var foodrandom = food*((Math.random()*0.2)+0.9)
food = parseInt(foodrandom);
reserve = food-longueur

if (annees == 1)
   bacpop.push(new Generation(1, 0));
else
   null;

if (longueur < reserve && annees != 1)
   bacpop.push(new Generation(longueur, 0));
else
   null;

if (reserve > 0 && reserve < longueur)
   bacpop.push(new Generation(reserve, 0));
else
   null;

if (food < longueur)
   bacpop.push(new Generation(0, 0));
else
   null;


nbgen = bacpop.length;
longueur = 0

for (var i = 0; i < nbgen; i++){
    comptage = bacpop[i].quant;
    longueur = longueur + comptage
}





// 5. DAMAGE COMES  //

nbgen = bacpop.length;

var lastgen = nbgen*1-1
var quantlast = bacpop[lastgen].damage


if (vardamage == 20)
   rootdamage = rootdamage*1.01;
else if (vardamage == 10)
   rootdamage = 10;
else if (vardamage == 5)
   rootdamage = 5;
else if (vardamage == 2)
   rootdamage = 2;
else 
   null;

for (var i = 0; i < nbgen; i++){
    firstdam = bacpop[i].damage
    bacpop[i].damage = firstdam*1+rootdamage;
    firstdam = bacpop[i].damage
}

premierdam = bacpop[0].damage

var quant0 = bacpop[0].quant


document.getElementById("cres1").innerHTML = "First bacteria damage : "+premierdam+" et "+quantlast;


// PRUNING OF DAMAGED ONES //

for (var i = 0; i < nbgen; i++){
    var badvibe = bacpop[i].damage;
    if (badvibe > 100)
       bacpop[i].quant = 0;
    else
       null;
}

// RECALCULATE POP //


nbgen = bacpop.length
longueur = 0

for (var i = 0; i < nbgen; i++){
    comptage = bacpop[i].quant;
    longueur = longueur+comptage
}

// OK COMPUTER //

decompte.push(annees);
decpop.push(longueur);
decrap.push(food);
deccres.push(bacpop[lastgen].quant);
decroot.push(rootdamage*1000);

// graph LAST 20 GENS //

var lastgen1 = nbgen*1-1
var lastgen2 = nbgen*1-2
var lastgen3 = nbgen*1-3
var lastgen4 = nbgen*1-4
var lastgen5 = nbgen*1-5
var lastgen6 = nbgen*1-6
var lastgen7 = nbgen*1-7
var lastgen8 = nbgen*1-8
var lastgen9 = nbgen*1-9
var lastgen10 = nbgen*1-10


var data = [
  {
    x: decompte,
    y: deccres,
    type: 'bar'
  }
];

var f1 = {
    x: decompte,
    y: decpop,
  mode: 'lines',
  name: 'Bacteria'
};

var f2 = {
    x: decompte,
    y: deccres,
  mode: 'bar',
  name: 'offspring'
};
var f3 = {
    x: decompte,
    y: decrap,
  mode: 'lines',
  name: 'food'
};
var f4 = {
    x: decompte,
    y: decroot,
  mode: 'bar',
  name: 'Toxicity'
};
var layout = {
  title:'Population evolution'
};

var doublegraph = [f1, f2, f3, f4];

Plotly.newPlot('myDiv', data);
Plotly.newPlot('tester', doublegraph, layout);


var idata = [{
  z: [decrap,
       decrap,
       decrap,
       decrap,
       decrap],
  x: decompte,
  y: decpop,
  type: 'contour'
}];

var ilayout = {
  title: 'Mass extinction events (red)'
};

Plotly.newPlot('Zero', idata, ilayout);


var ydata = [{
  z: [deccres,
       deccres,
       deccres,
       deccres,
       [23,17,11,10],
       [40,22,12,11],
       [0,22,17,14],
       [0,0,0,0]],
  x: [3,4,5,6],
  y: [2.4,2.2,2.0,1.8,1.6,1.4,1.2,1.0],
  type: 'contour'
}];

var ylayout = {
  title: 'Extinction events periodicity (in years)'
};

Plotly.newPlot('mee', ydata, ylayout);

  pauser = setTimeout(function () {


}, 200)
}, 500)
}



