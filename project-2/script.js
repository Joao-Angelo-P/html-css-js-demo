if (typeof(Storage) != "underfined"){
//Storage
localStorage.setItem("lastname", "Sobrenome");
//Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");}
else {
document.getElementById("result").innerHTML = "Sorry not support!";}