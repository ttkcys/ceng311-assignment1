document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const headerFile = isLoggedIn ? 'header_logged_in.html' : 'header.html';
    fetch(`../widgets/headers/${headerFile}`)
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '../widgets/headers/header.css';
            document.head.appendChild(link);
        })
        .catch(error => console.error('Error loading header:', error));

});
