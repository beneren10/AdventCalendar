var openClass = document.getElementsByClassName("open");
var variableText = document.getElementById('variable');
var variablePar = document.getElementById('variablePar');

var cities = ['London','Paris','Prague','Moscow','New York','Las Vegas','Tokyo','Osaka']


var who = ['Sibling','Friend','Old colleague','Boss','Ex Partner','Priest'];

var verb = ['painting','washing the dishes','running for a bus','judging a hot dog eating contest','singing','lip syncing for your life']

var when = ['2030','2033','2054','2031','2054','2026','2043','2038']


function openBox(num) {
    openClass[0].style.display = "flex";

    var randWho = who[Math.floor(Math.random(1) * (who.length - 1))];
    var randVerb = verb[Math.floor(Math.random(1) * (verb.length - 1))];
    var randWhen = when[Math.floor(Math.random(1) * (when.length - 1))];
    var randCity = cities[Math.floor(Math.random(1) * (cities.length - 1))];

    if (num == 25) {
        alert("HAPPY CHISTMAS HAPPY CHISTMAS")
    }
    variableText.innerHTML = (`You clicked box number ${num}`);
    variablePar.innerHTML = (`In the year ${randWhen} you will be ${randVerb} in the streets of ${randCity} with your ${randWho}`);

}

document.addEventListener('keydown', function() {
    openClass[0].style.display = "none";
}); 

function closeBox() {
    openClass[0].style.display = "none";
}