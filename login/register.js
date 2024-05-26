document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const level = document.getElementById('level').value;

    const user = {
        username,
        firstName,
        lastName,
        email,
        password,
        level
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});
