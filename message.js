let message = document.getElementById("message");
let textareaElement = document.getElementById("text");
let maxLength = parseInt(prompt("How many characters do you want to type?"));
let charactersLeft = maxLength;
let txtMessage = "";

textareaElement.addEventListener('input', function (e) {
    txtMessage = textareaElement.value;
    charactersLeft = maxLength - txtMessage.length;
    charactersLeft = charactersLeft < 0 ? 0 : charactersLeft;   
    message.textContent = "You have " + charactersLeft + " characters left." 
    //Using string slice method to restrict user message to certain length of characters which is taken as input from user during the initial load.
    textareaElement.value = txtMessage.slice(0,maxLength);
    //"jyothi".slice(0,NaN); returns "";    
});

//If user does not enter any value/ enters string value, charactersLeft will be NaN so checking if it is NaN.
//If user enters negative numbers checking if charactersLeft is greator than 0.
//Restricting the user to provide valid numerical values.
message.textContent = charactersLeft > 0 || !isNaN(charactersLeft) ? "You have " + charactersLeft + " characters left." : " Enter a valid number of characters to type here...";


