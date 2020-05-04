document.getElementById("etat").innerHTML = "Welcome, explorer ! There are no rabbits on Cress Island..."; 
document.getElementById("years").innerHTML = "Year : 0"; 
document.getElementById("lap1").innerHTML = "0-1 yrs : 0"
document.getElementById("lap2").innerHTML = "1-2 yrs : 0"
document.getElementById("lap3").innerHTML = "2-3 yrs : 0"
document.getElementById("lap4").innerHTML = "3-4 yrs : 0"
document.getElementById("lap5").innerHTML = "4-5 yrs : 0"
document.getElementById("lap6").innerHTML = "5-6 yrs : 0"
document.getElementById("laptotal").innerHTML = "Total population : 0"; 
document.getElementById("cres1").innerHTML = "Cress (sqm) : 5000"; 

var long
var pauser
var poplap
var annees
poplap1 = 10
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
var decpop = [10];
var deccres = [5000];
var decrap = [1];
rapport = 1
long = 6

var data = [
  {
    x: ["0-1 yrs", "1-2 yrs", "2-3 yrs", "3-4 yrs", "4-5 yrs", "5-6 yrs", "Total"],
    y: [poplap1, poplap2, poplap3, poplap4, poplap5, poplap6, laptotal],
    type: 'bar'
  }
];

Plotly.newPlot('tester', doublegraph);

function long6() { 
long = 6
}
function long5() { 
long = 5
}
function long4() { 
long = 4
}
function long3() { 
long = 3
}
function fert06() { 
fertility = 0.6
}
function fert07() { 
fertility = 0.7
}
function fert08() { 
fertility = 0.8
}
function fert09() { 
fertility = 0.9
}
function fert10() { 
fertility = 1
}
function fert11() { 
fertility = 1.1
}
function fert12() { 
fertility = 1.2
}

function msg() { var gogo = setInterval(function () {

document.getElementById("etat").innerHTML = "You've just imported 10 rabbits."; 
annees++

if (popcrestotal < 4000)
   popcrestotal = parseInt(popcrestotal+1000)
else 
   popcrestotal = 5000

if (popcrestotal < 1)
   popcrestotal = 0
else 
   null;
if (popcrestotal < 1)
   alert("Resources exhausted in only "+annees+" years !")
else 
   null;

// changement de longévité //

if ((long == 3 || long == 4) || long == 5)
   poplap6 = 0;
else 
   null;
if (long == 3 || long == 4) 
   poplap5 = 0;
else 
   null;
if (long == 3)
   poplap4 = 0;
else 
   null;

laptotal = poplap1+poplap2+poplap3+poplap4+poplap5+poplap6

prop1 = parseInt(100/(laptotal/(poplap1)))
if (poplap2 > 0)
   prop2 = parseInt(100/(laptotal/(poplap2)))
else 
   prop2 = 0;
if (poplap3 > 0)
   prop3 = parseInt(100/(laptotal/(poplap3)))
else 
   prop3 = 0;
if (poplap4 > 0)
   prop4 = parseInt(100/(laptotal/(poplap4)))
else 
   prop4 = 0;
if (poplap5 > 0)
   prop5 = parseInt(100/(laptotal/(poplap5)))
else 
   prop5 = 0;
if (poplap6 > 0)
   prop6 = parseInt(100/(laptotal/(poplap6)))
else 
   prop6 = 0;

document.getElementById("years").innerHTML = "Year : "+annees; 
document.getElementById("lap1").innerHTML = "0-1 yrs : "+poplap1+" ("+prop1+"%)";
document.getElementById("lap2").innerHTML = "1-2 yrs : "+poplap2+" ("+prop2+"%)";
document.getElementById("lap3").innerHTML = "2-3 yrs : "+poplap3+" ("+prop3+"%)";
document.getElementById("lap4").innerHTML = "3-4 yrs : "+poplap4+" ("+prop4+"%)"; 
document.getElementById("lap5").innerHTML = "4-5 yrs : "+poplap5+" ("+prop5+"%)";
document.getElementById("lap6").innerHTML = "5-6 yrs : "+poplap6+" ("+prop6+"%)";
document.getElementById("laptotal").innerHTML = "Rabbits, all ages : "+laptotal; 
document.getElementById("cres1").innerHTML = "Available cress (sqm) : "+popcrestotal; 
document.getElementById("textlong").innerHTML = "Longevity : "+long+" years"
document.getElementById("textfert").innerHTML = "Fertility : "+fertility*2+" newborns/f/yr"

// les lapins mangent le cresson//

popcrestotal = popcrestotal-laptotal
if (laptotal > popcrestotal)
   popcrestotal = 0
else 
   null;
if (laptotal > 2000)
   morts = laptotal*1-2000
else 
   morts = 1;

// les lapins qui n'ont pas mangé meurent//

npoplap1 = parseInt(poplap1-((prop1*morts)/100))
oldnpoplap1 = parseInt(poplap1-((prop1*morts)/100))
npoplap2 = parseInt(poplap2-((prop2*morts)/100))
npoplap3 = parseInt(poplap3-((prop3*morts)/100))
npoplap4 = parseInt(poplap4-((prop4*morts)/100))
npoplap5 = parseInt(poplap5-((prop5*morts)/100))
npoplap6 = parseInt(poplap6-((prop6*morts)/100))

// 4. les lapins vieillissent puis baisent  //

npoplap6 = parseInt(npoplap5*1)
npoplap5 = parseInt(npoplap4*1)
npoplap4 = parseInt(npoplap3*1)
npoplap3 = parseInt(npoplap2*1)
npoplap2 = parseInt(npoplap1*1)
if (annees < 1)
   npoplap1 = 10;
else 
   npoplap1 = parseInt((npoplap2*fertility)+(npoplap3*fertility)+(npoplap4*fertility)+(npoplap5*fertility)+(npoplap6*fertility));


if ((long == 3 || long == 4) || long == 5)
   npoplap6 = 0;
else 
   null;
if (long == 3 || long == 4) 
   npoplap5 = 0;
else 
   null;
if (long == 3)
   npoplap4 = 0;
else 
   null;



// 5. MAJ  //

poplap1 = npoplap1
poplap2 = npoplap2
poplap3 = npoplap3
poplap4 = npoplap4
poplap5 = npoplap5
poplap6 = npoplap6
laptotal = poplap1+poplap2+poplap3+poplap4+poplap5+poplap6

rapport = parseInt((laptotal*1+1)/(popcrestotal*1+1))
 

decompte.push(annees);
decpop.push(laptotal);
deccres.push(popcrestotal);
decrap.push(rapport);


var data = [
  {
    x: ["0-1 yrs", "1-2 yrs", "2-3 yrs", "3-4 yrs", "4-5 yrs", "5-6 yrs", "Total"],
    y: [poplap1, poplap2, poplap3, poplap4, poplap5, poplap6, laptotal],
    type: 'bar'
  }
];

var f1 = {
    x: decompte,
    y: decpop,
  mode: 'lines',
  name: 'Rabbits'
};

var f2 = {
    x: decompte,
    y: deccres,
  mode: 'lines',
  name: 'Cress'
};
var f3 = {
    x: decompte,
    y: decrap,
  mode: 'lines',
  name: 'R/C'
};
var layout = {
  title:'Population evolution'
};

var doublegraph = [f1, f2, f3];

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
  z: [[14,10,9,7],
       [17,11,10,8],
       [18,10,9,9],
       [18,12,10,9],
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



