const container = document.querySelector('.container');
const registerBtn  = document.querySelector('.register-btn');
const LoginBtn  = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})
LoginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

const loginForm = document.querySelector('.form-box.login form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();
        if (!username || !password) {
            alert('Please enter Username and Password.');
            return;
        }
        // Demo only: On real site, do AJAX here
        alert('Login successful!\nUsername: ' + username);
        // window.location = 'dashboard.html'; // Uncomment to redirect
    });

    // Handle Register form submission
    const regForm = document.querySelector('.form-box.register form');
    regForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = regForm.querySelector('input[type="text"]').value.trim();
        const email = regForm.querySelector('input[type="email"]').value.trim();
        const password = regForm.querySelector('input[type="password"]').value.trim();
        if (!username || !email || !password) {
            alert('Please fill all fields.');
            return;
        }
        // Simple email validation
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Demo only: On real site, do AJAX here
        alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email);
        // window.location = 'dashboard.html'; // Uncomment to redirect
    });

    // Social Login Links (all)
    const socialLinks = {
        google: 'https://accounts.google.com/signin',
        facebook: 'https://www.facebook.com/login.php',
        github: 'https://github.com/login',
        linkdin: 'https://www.linkedin.com/login' // note: class in HTML is "linkdin"
    };
    document.querySelectorAll('.social-icon a').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            // Find which social icon
            if (this.classList.contains('google')) {
                window.open(socialLinks.google, '_blank', 'width=500,height=600');
            } else if (this.classList.contains('facebook')) {
                window.open(socialLinks.facebook, '_blank', 'width=500,height=600');
            } else if (this.classList.contains('github')) {
                window.open(socialLinks.github, '_blank', 'width=500,height=600');
            } else if (this.classList.contains('linkdin')) {
                window.open(socialLinks.linkdin, '_blank', 'width=500,height=600');
            }
        });
    });
