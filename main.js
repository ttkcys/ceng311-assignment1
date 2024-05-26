document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('welcome-message').textContent = `Welcome, ${currentUser.firstName} ${currentUser.lastName}!`;
    } else {
        // Eğer giriş yapılmamışsa, kullanıcıyı login sayfasına yönlendirebiliriz.
        window.location.href = 'login.html';
    }

    // START butonuna tıklandığında game.html sayfasına yönlendirme yap
    document.getElementById('start-button').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../game/game.html';
    });
});
