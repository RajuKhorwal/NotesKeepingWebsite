document.querySelector('#semester1').addEventListener('click',()=>{
    window.location.href = 'semester_1.html'
})
document.querySelector('#semester2').addEventListener('click',()=>{
    window.location.href = 'semester_2.html'
})
document.querySelector('#semester3').addEventListener('click',()=>{
    window.location.href = 'semester_3.html'
})
document.querySelector('#semester4').addEventListener('click',()=>{
    window.location.href = 'semester_4.html'
})
document.querySelector('#semester5').addEventListener('click',()=>{
    window.location.href = 'semester_5.html'
})
document.querySelector('#semester6').addEventListener('click',()=>{
    window.location.href = 'semester_6.html'
})
document.querySelector('#semester7').addEventListener('click',()=>{
    window.location.href = 'semester_7.html'
})
document.querySelector('#semester8').addEventListener('click',()=>{
    window.location.href = 'semester_8.html'
})
document.querySelector('#notes1').addEventListener('click',()=>{
    window.location.href = 'notes1.html'
})
document.querySelector('#notes2').addEventListener('click',()=>{
    window.location.href = 'notes2.html'
})
document.querySelector('#notes3').addEventListener('click',()=>{
    window.location.href = 'notes3.html'
})
document.querySelector('#notes4').addEventListener('click',()=>{
    window.location.href = 'notes4.html'
})
document.querySelector('#notes5').addEventListener('click',()=>{
    window.location.href = 'notes5.html'
})
document.querySelector('#notes6').addEventListener('click',()=>{
    window.location.href = 'notes1.html'
})
document.querySelector('#notes7').addEventListener('click',()=>{
    window.location.href = 'notes7.html'
})
document.querySelector('#notes8').addEventListener('click',()=>{
    window.location.href = 'notes8.html'
})
document.addEventListener('DOMContentLoaded', function() {
    // Show login form and hide signup form initially
    document.getElementById('showLogin').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
    });

    // Show signup form and hide login form
    document.getElementById('showSignup').addEventListener('click', function() {
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    });

    // Handle login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Validate form fields before proceeding
        if (validateLoginForm()) {
            // For demonstration purposes, let's assume login is successful
            // You would typically handle authentication and session management here
            alert('Login successful! Redirecting to home page.');
            document.getElementById('loginForm').reset(); // Reset login form
            document.getElementById('logoutButton').style.display = 'inline-block'; // Show logout button
            document.getElementById('showSignup').style.display = 'none'; // Hide signup link
            document.getElementById('showLogin').style.display = 'none'; // Hide login link
            document.getElementById('loginSignupModal').style.display = 'none'; // Hide modal
            document.getElementsByClassName('modal-backdrop')[0].style.display = 'none'; // Hide modal backdrop
        } else {
            alert('Please fill in all required fields.'); // Show validation error message
        }
    });

    // Handle signup
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Validate form fields before proceeding
        if (validateSignupForm()) {
            // For demonstration purposes, let's assume signup is successful
            // You would typically handle signup process and possibly redirect here
            alert('Signup successful! Redirecting to home page.');
            window.location.href = '/'; // Redirect to home page
        } else {
            alert('Please fill in all required fields.'); // Show validation error message
        }
    });

    // Handle logout
    document.getElementById('logoutButton').addEventListener('click', function() {
        // For demonstration purposes, let's assume logout is successful
        // You would typically clear authentication tokens or session data here
        alert('Logged out!');
        document.getElementById('userInfo').style.display = 'none'; // Hide user info div
        document.getElementById('showSignup').style.display = 'inline-block'; // Show signup link
        document.getElementById('showLogin').style.display = 'inline-block'; // Show login link
    });
});

// Function to validate login form fields
function validateLoginForm() {
    var username = document.getElementById('usernameInput').value.trim();
    var password = document.getElementById('passwordInput').value.trim();
    return username !== '' && password !== ''; // Check if both fields are not empty
}

// Function to validate signup form fields
function validateSignupForm() {
    var username = document.getElementById('signupUsername').value.trim();
    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value.trim();
    return username !== '' && email !== '' && password !== ''; // Check if all fields are not empty
}