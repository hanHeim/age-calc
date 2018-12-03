// calculate function
function ageCalculation() {

    // get value from input field
    var inputValue = document.getElementById("userAge").value;

    // calculation
    var currentYear = new Date().getFullYear(); // 2018
    var maxAge = currentYear - 100; // 1918
    var userAge = currentYear - inputValue; // 2018 - age of user
    
    // validation
    if (inputValue == "" || inputValue == 0 ||  inputValue >= currentYear) {
      window.alert("Please type in the correct year.");
      location.reload();
    }
  
    console.log(inputValue, maxAge);
   
    // display answer
    if (inputValue <= maxAge) {
      document.getElementById("answerText").innerHTML = "Really? Are you sure you are currently <span>" + userAge + "</span> years old?";
    } else if (inputValue > maxAge) {
      document.getElementById("answerText").innerHTML = "You are currently <span>" + userAge + "</span> years old.";
    }
  
      // empty form
    document.getElementById("userAge").value = "";
  
}