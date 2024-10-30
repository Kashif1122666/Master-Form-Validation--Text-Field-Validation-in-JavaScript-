// Chapter 82: Form Validation - Text Fields

// FUNCTION FOR VALIDATION



// function for last name validation
// function checkForLastName() {
//     if (document.getElementById("lastNameField").value.trim().length === 0) {
//          alert("please enter your last name");
//          return false;
//     }
// }

// improved function with focus in field after invalid submission
// function checkForLastName(){
//     var targetField = document.getElementById("lastNameField");
//     if (targetField.value.trim().length === 0) {
//          alert("please enter your last name");
//          targetField.focus();// places cursor in the field
//          return false;
//     }
// }


// adding visual feedback
function checkForLastName() {
    var targetField = document.getElementById("lastNameField");
    if (targetField.value.trim().length === 0) {
        alert("please enter your last name");
        targetField.style.background = "yellow"; // highlight empty field
        targetField.focus();
        return false;
    }
    targetField.style.background = "white";// Restore background after valid input
 }