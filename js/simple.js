
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
    ' Hi, I Am Vim ',
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

    setTimeout(autoWrite,300);
      
  }


  // marque Sections; 
  const quotes = [
    "If you believe it.You will Achieve it!. — Vim Magar",
    "Be nice, be humble. You never know what someone is going through. — Vim Magar",
    "The fate demanded and has to be given. — Vim Magar",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
  ];
  
  // Function to combine all quotes with spacing
  function combineQuotes() {
    return quotes.join("  • ") + "" +  " • ";
  }
  
  const combinedQuotes = combineQuotes();
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = combinedQuotes;
  
  // Calculate the total width of the text
  const calculateTextWidth = () => {
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.fontSize = '24px';
    tempSpan.textContent = combinedQuotes;
    document.body.appendChild(tempSpan);
    const width = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    return width;
  };
  
  // Set up marquee animation
  function setupMarquee() {
    const marqueeElement = document.getElementById('marquee');
    const textWidth = calculateTextWidth();
    const boxWidth = document.querySelector('.marquee-box').offsetWidth;
    
    // Create multiple spans to fill the marquee
    let content = '';
    const repeats = Math.ceil((boxWidth * 2) / textWidth) + 1;
    
    for (let i = 0; i < repeats; i++) {
      content += combinedQuotes;
    }
    
    quoteElement.textContent = content;
    
    // Animate the marquee
    let position = 0;
    const speed = 50; // Lower value = faster scroll
    
    function animate() {
      position -= 1;
      
      // Reset position when text has scrolled completely
      if (position <= -textWidth) {
        position = 0;
      }
      
      marqueeElement.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
    
    animate();
  }
  
  // Initialize marquee when page is loaded
  window.addEventListener('load', setupMarquee);
  
  // Reinitialize on window resize
  window.addEventListener('resize', setupMarquee);



  // Time Limited 

  // set end date 
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  // function limitedDate 
  const countDate = setInterval(()=>{

    let now = new Date().getTime();
    let remainingDate = endDate.getTime() - now;
    
    // logical 
    const days = Math.floor(remainingDate / (1000*60*60*24));
    const hours = Math.floor(remainingDate % (1000*60*60*24) /(1000*60*60));
    const minutes = Math.floor(remainingDate % (1000 * 60*60) / (1000 * 60));
    const seconds = Math.floor(remainingDate % (1000 * 60) / (1000));
    
    document.getElementById('days').innerHTML = (days < 0 ? '0' : '') + days;
    document.getElementById('hours').innerHTML = (hours < 0 ? '0' : '') + hours;
    document.getElementById('minutes').innerHTML = (minutes < 0 ? '0' : '') + minutes
     document.getElementById('seconds').innerHTML = (seconds < 0 ? '0' : '') + seconds

     if(remainingDate <= 0 ) {
      document.getElementById(offer-content).style.display = "block";
      document.getElementById(expired-message).style.display = "none";
     }
  },1000)
    