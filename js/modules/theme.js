// Theme module
export class Theme {
    constructor() {
        this.toggle = document.querySelector(".toggle");
        this.bodyEl = document.querySelector("body");
        this.isToggle = JSON.parse(localStorage.getItem("mode"));
        
        this.init();
    }

    init() {
        this.applyInitialTheme();
        this.setupThemeToggle();
    }

    applyInitialTheme() {
        if (this.isToggle) {
            this.bodyEl.classList.add("darkTheme");
        } else {
            this.bodyEl.classList.remove("darkTheme");
        }
    }

    setupThemeToggle() {
        this.toggle.addEventListener("click", () => {
            this.bodyEl.classList.toggle("darkTheme");
            const darkModeOn = this.bodyEl.classList.contains("darkTheme");
            localStorage.setItem("mode", JSON.stringify(darkModeOn));
        });
    }
} 