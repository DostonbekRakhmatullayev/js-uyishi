 var elLabel = document.querySelector("#answer");
 var elInput = document.querySelector("#number")
 var elSelect = document.querySelector(".select")
 
 var elButton = document.querySelector("#form")
 var elOutput = document.querySelector(".text-run")
 
 elButton.addEventListener("submit", function (e) {
    e.preventDefault()
    var conertDirectory = elSelect.value
    var amout = elInput.value.trim();
    var result = "";
    console.log(conertDirectory);
    if(conertDirectory == 'tdtu'){
        if ( 0 <= amout && amout <= 80) {
            result = "Siz uqishga kirolmadingiz"
        } else if ( 80 <= amout && amout <= 110) {
            result = "Kantirakka kirdingiz"
        } else if (110 <= amout && amout < 190) {
            result = "Girnatga kirdingiz"
        }
    } else if(conertDirectory == 'milliy'){
        if ( 0 <= amout && amout <= 100) {
            result = "Siz uqishga kirolmadingiz"
        } else if ( 100 <= amout && amout <= 160) {
            result = "Kantirakka kirdingiz"
        } else if (160 <= amout && amout < 190) {
            result = "Girnatga kirdingiz"
        }
    } else if (conertDirectory == 'moliya') {
        if ( 0 <= amout && amout <= 110) {
            result = "Siz uqishga kirolmadingiz"
        } else if ( 110 <= amout && amout <= 170) {
            result = "Kantirakka kirdingiz"
        } else if (170 <= amout && amout < 190) {
            result = "Girnatga kirdingiz"
        } 
    }
    
    elOutput.textContent = result;
})
