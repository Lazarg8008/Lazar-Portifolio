function emailSend(){
    Email.send({
        Host : "smtp.mailendo.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}



// Get the toggle button and nav links
const toggleNav = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navlinks');

// Add event listener to toggle nav links when the hamburger icon is clicked
toggleNav.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});

// Hide the nav links when any link is clicked (for responsive behavior)
const navItems = document.querySelectorAll('.navlinks a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('active'); // Hide the nav links
    });
});
