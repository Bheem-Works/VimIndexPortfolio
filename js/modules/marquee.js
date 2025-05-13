// Marquee module
export class Marquee {
    constructor() {
        this.quotes = [
            "If you believe it.You will Achieve it!. — Vim Magar",
            "Be nice, be humble. You never know what someone is going through. — Vim Magar",
            "The fate demanded and has to be given. — Vim Magar",
            "In the middle of difficulty lies opportunity. — Albert Einstein",
            "Code is poetry. — WordPress",
            "Stay hungry, stay foolish. — Steve Jobs"
        ];
        this.marqueeElement = document.getElementById('marquee');
        this.quoteElement = document.getElementById('quote');
        this.box = document.querySelector('.marquee-box');
        
        this.init();
    }

    init() {
        this.setupMarquee();
        window.addEventListener('resize', () => this.setupMarquee());
    }

    combineQuotes() {
        return this.quotes.join("  • ") + "  • ";
    }

    calculateTextWidth() {
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.style.fontSize = '24px';
        tempSpan.textContent = this.combineQuotes();
        document.body.appendChild(tempSpan);
        const width = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);
        return width;
    }

    setupMarquee() {
        const textWidth = this.calculateTextWidth();
        const boxWidth = this.box.offsetWidth;
        
        // Create multiple spans to fill the marquee
        let content = '';
        const repeats = Math.ceil((boxWidth * 2) / textWidth) + 1;
        
        for (let i = 0; i < repeats; i++) {
            content += this.combineQuotes();
        }
        
        this.quoteElement.textContent = content;
        
        // Animate the marquee
        let position = 0;
        const speed = 50; // Lower value = faster scroll
        
        const animate = () => {
            position -= 1;
            
            // Reset position when text has scrolled completely
            if (position <= -textWidth) {
                position = 0;
            }
            
            this.marqueeElement.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        };
        
        animate();
    }
} 