// Select the audio element
const bgMusic = document.getElementById("bg-music");

// Function to start the music
function playMusic() {
    if (bgMusic.paused) {
        bgMusic.volume = 0.7; // Adjust volume (between 0 and 1)
        bgMusic.play().catch(error => console.log("Music autoplay blocked:", error));
    }
}

// Play music when the user clicks "Next"
document.getElementById("next-btn").addEventListener("click", () => {
    playMusic();
    nextSection();
});

// Also play when clicking "Yes" or "Yes, please"
document.querySelectorAll(".valentine-btn").forEach(btn => {
    btn.addEventListener("click", playMusic);
});

const sections = [
    { message: "Hey my love ❤️", description: "I have something special to ask you." },
   /* { message: "But first...", description: "You need to know that OLIVE YOU SOOO MUCH 😊" },
    { message: "Did you know?", description: "Everytime I am with you I learn something new. ✨" },
    { message: "One last thing...", description: "You make my life easier every single day. ☀️" },*/
    
];

let currentIndex = 0;

// Function to go to the next section
function nextSection() {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        updateContent();
    } else {
        document.querySelector(".content").classList.add("hidden");
        document.querySelector(".final-options").classList.remove("hidden");
    }
}

// Function to go to the previous section
function prevSection() {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
}

// Function to update the content dynamically
function updateContent() {
    document.getElementById("message").innerText = sections[currentIndex].message;
    document.getElementById("description").innerText = sections[currentIndex].description;
}

// When the proposal is accepted, trigger the heart confetti
function acceptProposal() {
    startHeartConfetti(); // Trigger confetti

    // Show alert first
    setTimeout(() => {
        alert("Yay! You made my Valentine’s Day ❤️\nLet me know on WhatsApp!");

        // After user closes alert, redirect to WhatsApp
        const whatsappNumber = "0742023374"; // Replace with your WhatsApp number
        const message = encodeURIComponent("Hey! I just said YES to being your Valentine! ❤️🥰");
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Redirect after alert is closed
        setTimeout(() => {
            window.open(whatsappLink, "_blank");
        }, 500); // Slight delay for a smoother experience
    }, ); // Delay to let the confetti effect start
}













/* Get all necessary elements
const nextBtn = document.getElementById("next-btn");
const decisionDiv = document.querySelector(".decision");
const questionText = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const responseText = document.getElementById("response");
const cartoon = document.getElementById("cartoon");
const floatingIcons = document.getElementById("floating-icons");
const yesSound = document.getElementById("yes-sound");
const noSound = document.getElementById("no-sound");

// Set your WhatsApp phone number (replace with your real number)
const phoneNumber = "0742023374"; // Replace with your WhatsApp number (no spaces)

// Step 1: Clicking "Next" reveals the proposal
nextBtn.addEventListener("click", () => {
    questionText.textContent = "Will you be my Valentine? 💕";
    decisionDiv.classList.remove("hidden");
    nextBtn.classList.add("hidden");
});

// Step 2: Making "No" button move away on hover
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Step 3: Clicking "Yes" triggers celebration & sends WhatsApp message
yesBtn.addEventListener("click", () => {
    responseText.textContent = "Yay! Can't wait for our date! 🎉💖";
    responseText.classList.remove("hidden");
    cartoon.src = "happy.gif";
    cartoon.style.transform = "scale(1.2) rotate(10deg)";
    yesSound.play();
    generateFloatingIcons("❤️");

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=Yes! I'll be your Valentine ❤️`, "_blank");
});

// Step 4: Clicking "No" shows sad animation & sends WhatsApp message
noBtn.addEventListener("click", () => {
    responseText.textContent = "It's okay, maybe next time. 😢";
    responseText.classList.remove("hidden");
    cartoon.src = "sad-dance.gif";
    noSound.play();
    generateFloatingIcons("💔");

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=Sorry, I can't be your Valentine 💔`, "_blank");
});

// Step 5: Generate floating hearts or heartbreaks
function generateFloatingIcons(icon) {
    for (let i = 0; i < 20; i++) {
        const floating = document.createElement("div");
        floating.textContent = icon;
        floating.classList.add("floating");
        floating.style.left = `${Math.random() * 100}%`;
        floating.style.animationDuration = `${Math.random() * 3 + 2}s`;
        floatingIcons.appendChild(floating);
        setTimeout(() => floating.remove(), 4000);
    }
} */
