document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
}
    // Clear previous error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validate username
    if (username.length < 3) {
        document.getElementById('username-error').textContent = 'Username must be at least 3 characters long.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If the form is valid, you can submit it or perform further actions
    if (isValid) 
        alert('Form submitted successfully!');
        