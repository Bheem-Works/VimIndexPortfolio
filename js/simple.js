
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


  // creating a toggle dark theme sections 

  const toggle = document.querySelector(".toggle");
  const bodyEl = document.querySelector("body");
  
  const isToggle = JSON.parse(localStorage.getItem("mode"));
  
  if (isToggle) {
    bodyEl.classList.add("darkTheme");
  } else {
    bodyEl.classList.remove("darkTheme");
  }
  
  toggle.addEventListener("click", () => {
    bodyEl.classList.toggle("darkTheme");
  
    // Save the updated mode based on class presence
    const darkModeOn = bodyEl.classList.contains("darkTheme");
    localStorage.setItem("mode", JSON.stringify(darkModeOn));
  });
  



  // auto write 
  const vim = document.querySelector(".vim");
const text = [
    'Hi, I Am Vim', 'Front-end dev', 'web designer', 'UI/UX', 
];
  let character = 0; 
  let index = 0;
  autoWrite();

  function autoWrite() {
    character++;
    vim.innerHTML = `${text[index].slice(0,character)}`;
    if(character === text[index].length) {
       index++ 
       character=0; 
    } 
    if(index === text.length) {
      index = 0;
      character = 0;
    }

    setTimeout(autoWrite,300);
      
  }
