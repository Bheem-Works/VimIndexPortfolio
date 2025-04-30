// JavaScript for mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('nav ul');
    const btnGroup = document.querySelector('.btnGroup');
    
    hamburger.addEventListener('click', function() {
      // Toggle active class on hamburger
      this.classList.toggle('active');
      
      // Toggle active class on nav links and button group
      navLinks.classList.toggle('active');
      btnGroup.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        btnGroup.classList.remove('active');
      });
    });
  });