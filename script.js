// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // delte previous errors
    clearErrors();

    let isValid = true;

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // check username
    if (fullName.length < 5) {
        showError('nameError', 'Full Name must be at least 5 characters long.');
        isValid = false;
    }

    // check user Email
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // check Phone Number
    if (!/^\d{10}$/.test(phone) || phone === '1234567890') {
        showError('phoneError', 'Enter a valid 10-digit phone number, excluding 1234567890.');
        isValid = false;
    }

    // check Password
    const nameLower = fullName.toLowerCase();
    if (password.length < 8 || password === 'password' || password.toLowerCase() === nameLower) {
        showError('passwordError', 'Password must be at least 8 characters long and not be "password" or the same as your name.');
        isValid = false;
    }

    // check Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If form is valid, alert success
    if (isValid) {
        alert('Form submitted successfully!');
    }
});

// show error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.form-text');
    errors.forEach(error => error.textContent = '');
}
