document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        alert('Login successful! Welcome ' + user.firstName + ' ' + user.lastName);
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '../main.html';
    } else {
        alert('Invalid username or password');
    }
});
