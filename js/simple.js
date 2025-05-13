
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

const getEndDate = () => {
  const savedEndDate = localStorage.getItem('countdownEndDate');
  
  if (savedEndDate) {
    return new Date(parseInt(savedEndDate));
  } else {
    // Create a new end date (3 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    
    // Save to localStorage
    localStorage.setItem('countdownEndDate', endDate.getTime().toString());
    return endDate;
  }
};

// Initialize end date
const endDate = getEndDate();

// Countdown logic function
const countDownLogic = () => {
  const now = new Date().getTime();
  const remainingTime = endDate.getTime() - now;
  
  // Calculate time components
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  // Update DOM
  document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
  
  // Check if countdown has expired
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById('offer-content').style.display = "block";
    document.getElementById('expired-message').style.display = "none";
    
    // Optional: Clear localStorage when expired
    // localStorage.removeItem('countdownEndDate');
  }
};

// Run countdown immediately and then every second
countDownLogic();
const timerInterval = setInterval(countDownLogic, 1000);

// For testing: Reset the countdown
const resetCountdown = () => {
  localStorage.removeItem('countdownEndDate');
  location.reload();
};

