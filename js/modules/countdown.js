// Countdown module
export class Countdown {
    constructor() {
        this.endDate = this.getEndDate();
        this.timerInterval = null;
        this.offerContent = document.getElementById('offer-content');
        this.expiredMessage = document.getElementById('expired-message');
        
        this.init();
    }

    init() {
        this.startCountdown();
    }

    getEndDate() {
        const savedEndDate = localStorage.getItem('countdownEndDate');
        
        if (savedEndDate) {
            return new Date(parseInt(savedEndDate));
        } else {
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 3);
            localStorage.setItem('countdownEndDate', endDate.getTime().toString());
            return endDate;
        }
    }

    formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    updateDisplay(days, hours, minutes, seconds) {
        document.getElementById('days').innerHTML = this.formatTime(days);
        document.getElementById('hours').innerHTML = this.formatTime(hours);
        document.getElementById('minutes').innerHTML = this.formatTime(minutes);
        document.getElementById('seconds').innerHTML = this.formatTime(seconds);
    }

    handleExpiration() {
        clearInterval(this.timerInterval);
        this.offerContent.style.display = "none";
        this.expiredMessage.style.display = "block";
        
        // Add a cool animation when expired
        this.expiredMessage.style.animation = "fadeIn 0.5s ease-in";
    }

    countDownLogic() {
        const now = new Date().getTime();
        const remainingTime = this.endDate.getTime() - now;
        
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        this.updateDisplay(days, hours, minutes, seconds);
        
        if (remainingTime <= 0) {
            this.handleExpiration();
        }
    }

    startCountdown() {
        this.countDownLogic();
        this.timerInterval = setInterval(() => this.countDownLogic(), 1000);
    }

    reset() {
        localStorage.removeItem('countdownEndDate');
        location.reload();
    }
} 