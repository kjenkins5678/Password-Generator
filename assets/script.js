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
// var copybtn = document.getElementById("copy");

var charTypes = [];
var randomCharChoice = "";
var password = "";

var isGenerated = false;

pwGen.addEventListener("click", function(event){

    event.preventDefault();

    if(isGenerated){
        return false;
    }

    pwLen = parseInt(pwLenSelector.options[pwLenSelector.selectedIndex].value);

    if (!$("#special-characters").is(":checked") && !$("#numeric-characters").is(":checked") && !$("#uppercase-characters").is(":checked") &&  !$("#lowercase-characters").is(":checked")){
        alert("Check at least one type of character");
    }
    
    //Determine which checkboxes are checked
    if($("#special-characters").is(':checked')){
        console.log("spec char checked");
        charTypes.push("Spec");
    }

    if($("#numeric-characters").is(':checked')){
        console.log("numeric checked");
        charTypes.push("Num");
    }

    if($("#uppercase-characters").is(':checked')){
        console.log("upper case checked");
        charTypes.push("Upper");
    }

    if($("#lowercase-characters").is(':checked')){
        console.log("lowercase checked");
        charTypes.push("Lower");

    }

    // console.log("pwlength = " + pwLen);
    // console.log(charTypes);

    //Loop through this as many times as is in pwLen

    for (i = 0; i < pwLen; i++){
        //Randomly choose which char set to select from
        var randomSetChoice = charTypes[Math.floor(Math.random() * charTypes.length)];
        // console.log(randomSetChoice);

        //Randomly choose chars from the selected set
        if (randomSetChoice == "Spec"){
            randomCharChoice = specialChar[Math.floor(Math.random() * specialChar.length)];
            password += randomCharChoice;
            // console.log("password: " + password);
        };

        if (randomSetChoice == "Num"){
            randomCharChoice = numericChar[Math.floor(Math.random() * numericChar.length)];
            password += randomCharChoice;
            // console.log("password: " + password);
        };

        if (randomSetChoice == "Upper"){
            randomCharChoice = alphabetChar[Math.floor(Math.random() * alphabetChar.length)];
            password += randomCharChoice;
            // console.log("password: " + password);
        };

        if (randomSetChoice == "Lower"){
            randomCharChoice = alphabetUChar[Math.floor(Math.random() * alphabetUChar.length)];
            password += randomCharChoice;
            // console.log("password: " + password);
        };
    };

    textbox.innerHTML=password;
    isGenerated = true;

});
