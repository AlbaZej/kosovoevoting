function countdown() {
    const eventDate = new Date("December 15, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Voting has ended.";
    }
}

setInterval(countdown, 1000);

function navigateToLogin() {
    alert("Redirecting to Login Page...");
    window.location.href = "login.html";

}

function navigateToRegister() {
    alert("Redirecting to Registration Page...");
    window.location.href = "register.html";

}
