// Navigation module
export class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger-menu');
        this.navLinks = document.querySelector('nav ul');
        this.btnGroup = document.querySelector('.btnGroup');
        this.navItems = document.querySelectorAll('nav ul li a');
        
        this.init();
    }

    init() {
        this.setupHamburger();
        this.setupNavItems();
    }

    setupHamburger() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navLinks.classList.toggle('active');
            this.btnGroup.classList.toggle('active');
        });
    }

    setupNavItems() {
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navLinks.classList.remove('active');
                this.btnGroup.classList.remove('active');
            });
        });
    }
} 