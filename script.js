//when load/ refresh, cursor focus on the principal/ amount input box
window.onload =  function() {
    document.getElementById("principal").focus();
}

function updateRate() //when changing the range, the label also change
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate").step = "0.25";
    document.getElementById("rate_val").innerText=rateval;
}

function compute()  //calculating...
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal<=0) {   //principal box 's value is less than zero or empty
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();  //focus on the principal box directly 
        document.getElementById("principal").value = "";  //clear the principal box
        document.getElementById("result").innerHTML= "";  //clear the result box
    } 
    else {
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
    
        document.getElementById("result").innerHTML= "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark><br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + year + "</mark><br>";
    }
}
