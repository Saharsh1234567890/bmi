function bmi(){

 var a = document.getElementById("h").value;
 document.getElementById("he").innerHTML = a;
 var b = document.getElementById("w").value;
 document.getElementById("we").innerHTML = b;
 var bmi = b/(a*a);
 document.getElementById("BMI-Value").innerHTML = bmi;
 
}