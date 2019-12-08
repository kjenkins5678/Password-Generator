//Generate password length options
var pwLenSelector = document.querySelector("#FormControlSelect");

for (i = 8; i < 129; i++)
{
    var option = document.createElement("option");
    option.innerHTML = i;
    pwLenSelector.appendChild(option);
};

var pwGen = document.querySelector("#generatePW");
var specChar = document.getElementById("special-characters");
var numChar = document.getElementById("numeric-characters");
var ucChar = document.getElementById("uppercase-characters");
var lcChar = document.getElementById("lowercase-characters");
var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUChar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numericChar = "1234567890".split("");
var specialChar = "!@#$%^&*()_+-={}|\\][;'\":<>?/.,~`".split("");
var textbox = document.getElementById("textArea");
var copybtn = document.getElementById("copy");

var includeSpecChar = false;
var includeNumChar = false;
var includeUCChar = false;
var includeLCChar = false;


pwGen.addEventListener("click", function(event){

    event.preventDefault();
    // pwLen = parseInt(pwLenSelector.options[pwLenSelector.selectedIndex].value);
    // validateInput()

    if($("#special-characters").is(':checked')){
        console.log("spec char checked");
        includeSpecChar = true;
    }

    if($("#numeric-characters").is(':checked')){
        console.log("numeric checked");
        includeNumChar = true;
    }

    if($("#uppercase-characters").is(':checked')){
        console.log("upper case checked");
        includeUCChar = true;
    }

    if($("#lowercase-characters").is(':checked')){
        console.log("lowercase checked");
        includeLCChar = true;
    }
    
});
