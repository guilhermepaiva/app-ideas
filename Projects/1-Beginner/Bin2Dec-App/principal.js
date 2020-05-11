var buttonCalculate = document.querySelector("#button-calculate");

buttonCalculate.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector("#form-binary");
    var binaryNumber = form.binary.value;
    var decimalNumber = parseInt(binaryNumber, 2);
    
    var resultMessage = document.createElement("h4");
    var text = "The binary number ";
    var text = text.concat(binaryNumber);
    var text = text.concat(" is ");
    var text = text.concat(decimalNumber);
    var text = text.concat(" in decimal");

    console.log(text);
    
    
    var paragraph = document.createElement("p");
    var node = document.createTextNode(text);
    paragraph.appendChild(node);

    var element = document.getElementById("#result");
    element.appendChild(paragraph);
    
    
    
    
});