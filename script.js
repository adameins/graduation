document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    if (validateForm()) {
      landingPage(); // Redirect to landing.html
    }
  });

function validateForm() {
    var studentID = document.getElementById("studentID").value;
    var password = document.getElementById("password").value;
  
    // Perform validation checks
    if (studentID === "" || password === "") {
      alert("Please enter both student ID and password.");
      return false;
    }
    else if (studentID.length !== 3) {
      alert("Student ID must be 3 digits long.");
      return false;
    }
  
    // Additional validation logic can be added here, such as checking against a database or API
  
    landingPage(); // Call the landingPage() function to redirect the user
  }
  
function landingPage() {
    window.location.href = "landing.html";
  }
  