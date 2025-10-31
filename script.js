// Get form and input elements
const form = document.getElementById('userForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Function to display error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Function to clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(err => err.textContent = '');
}

// Validation logic
function validateForm() {
    clearErrors();
    let isValid = true;

    // Name validation
    if (fullName.value.trim().length < 5) {
        showError('nameError', 'Full name must be at least 5 characters.');
        isValid = false;
    }

    // Email validation
    if (!email.value.includes('@')) {
        showError('emailError', 'Enter a valid email.');
        isValid = false;
    }

    // Phone validation
    if (phone.value === '123456789' || !/^\d{10}$/.test(phone.value)) {
        showError('phoneError', 'Enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Password validation
    if (password.value.length < 8 ||
        password.value.toLowerCase() === 'password' ||
        password.value.toLowerCase() === fullName.value.toLowerCase()) {
        showError('passwordError', 'Password is not strong.');
        isValid = false;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        showError('confirmError', 'Passwords do not match.');
        isValid = false;
    }

    return isValid;
}

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Real-time validation using onChange
form.addEventListener('input', function (e) {
    validateForm();
});
