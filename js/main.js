// Import all modules
import { Navigation } from './modules/navigation.js';
import { Theme } from './modules/theme.js';
import { TypingAnimation } from './modules/typing.js';
import { Marquee } from './modules/marquee.js';
import { Countdown } from './modules/countdown.js';
import { Animations } from './modules/animations.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    new Navigation();
    
    // Initialize theme
    new Theme();
    
    // Initialize typing animation
    new TypingAnimation();
    
    // Initialize marquee
    new Marquee();
    
    // Initialize countdown
    new Countdown();
    
    // Initialize animations
    new Animations();
}); 