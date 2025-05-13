// Typing animation module
export class TypingAnimation {
    constructor() {
        this.vim = document.querySelector(".vim");
        this.texts = [
            'Hi, I Am Vim',
            'Frontend Developer',
            'React Enthusiast',
            'Problem Solver'
        ];
        this.currentIndex = 0;
        this.character = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
        
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentIndex];
        
        if (this.isDeleting) {
            this.character--;
        } else {
            this.character++;
        }

        this.vim.innerHTML = currentText.slice(0, this.character);

        let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.character === currentText.length) {
            this.isDeleting = true;
            speed = this.pauseTime;
        } else if (this.isDeleting && this.character === 0) {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            speed = 500;
        }

        setTimeout(() => this.type(), speed);
    }
} 