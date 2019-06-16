var click = 1
var cost = click * 10
function add1(){
    document.getElementById("counter").innerHTML = document.getElementById("counter").innerHTML * 1 + click
}
function more(){
    var amount = document.getElementById("counter").innerHTML * 1
    if (amount >= cost){
        document.getElementById("counter").innerHTML = document.getElementById("counter").innerHTML * 1 - cost;
        click += Math.floor(Math.random() * 4) + 1
        cost = cost + Math.floor(Math.random() * 25)
        document.getElementById("cost").innerHTML = "Cost: " + cost + "$"
        document.getElementById("clickW").innerHTML = "Click: " + click + "$"
    }
}
