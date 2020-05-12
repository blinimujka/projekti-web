

function changeForm(form) {
    let forms = document.querySelectorAll("form>div");
    if (form == 0) {
        forms[0].classList.remove("hidden");
        forms[0].classList.add("form-style");
        forms[1].classList.add("hidden");
        forms[1].classList.remove("form-style");
    } else {
        forms[1].classList.remove("hidden");
        forms[1].classList.add("form-style");
        forms[0].classList.add("hidden");
        forms[0].classList.remove("form-style");
    }
}

function validate(form) {
    let inputs = document.querySelectorAll("input");
    if (form == 0 && inputs[0].value == "" && inputs[1].value == "") {
        alert("nuk keni mbushur te dhenat");
    } else if (form == 1 && inputs[3].value == "" && inputs[4].value == "" && inputs[5].value == "") {
        alert("nuk mund te regjistroheni nese nuk keni mbushur te dhenat");
    }
}
var display = document.getElementById("pwd-click").addEventListener("click",function(){
    document.getElementById("pwd-req-display").style.visibility = "visible";
    
    })
    