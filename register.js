// Initialize form validation and event handling
document.getElementById("registerForm").addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Variable declarations
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value; // Add confirmPassword variable
    let errorMessage = "";

    // Conditional statements and form validation
    if (name.length < 3) {
        errorMessage += "Name must be at least 3 characters long.\n";
    }
    if (!email.includes("@") || !email.includes(".")) {
        errorMessage += "Please enter a valid email address.\n";
    }
    if (age < 18) {
        errorMessage += "You must be at least 18 years old to register.\n";
    }
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
    }
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match. Please try again.\n"; // Check if passwords match
    }

    // Error handling
    if (errorMessage) {
        alert("Registration Error:\n" + errorMessage);
    } else {
        alert("Registration successful!");
        // Proceed with form submission or additional actions
    }
}

// Tooltip for guidance
function showTooltip() {
    alert("Please fill out all fields accurately.");
}

// Highlight input fields on focus
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("focus", () => input.classList.add("highlight"));
    input.addEventListener("blur", () => input.classList.remove("highlight"));
});
