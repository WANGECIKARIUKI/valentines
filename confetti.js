function startHeartConfetti() {
    for (let i = 0; i < 50; i++) { // Generate multiple hearts at once
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️🎉"; // Heart emoji
            heart.classList.add("heart-confetti");

            document.body.appendChild(heart);

            let xPos = Math.random() * window.innerWidth; // Random horizontal position
            let size = Math.random() * 20 + 10; // Random heart size

            heart.style.left = `${xPos}px`;
            heart.style.fontSize = `${size}px`;
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200); // Staggered effect for natural confetti fall
    }
}

// Start confetti when a proposal button is clicked
function acceptProposal() {
    startHeartConfetti();
    //alert("Yay! You made my Valentine’s Day ❤️");
}
