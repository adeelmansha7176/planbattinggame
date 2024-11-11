// script.js

document.addEventListener("DOMContentLoaded", () => {
    const spinButton = document.querySelector(".spinBtn");
    const wheel = document.querySelector(".wheel");
    const segments = [20, 15, 10, 5, 0, 18, 13, 11]; // Rewards on the wheel
    let isSpinning = false;
  
    spinButton.addEventListener("click", () => {
      if (isSpinning) return; // Prevent multiple spins at once
      isSpinning = true;
  
      // Generate a random degree for spin
      const randomSegment = Math.floor(Math.random() * segments.length);
      const segmentDegree = 360 / segments.length;
      const spinDegree = 360 * 5 + randomSegment * segmentDegree; // Rotate multiple times + segment position
  
      // Apply the spin rotation to the wheel
      wheel.style.transition = "transform 4s ease-out";
      wheel.style.transform = `rotate(${spinDegree}deg)`;
  
      // Wait for the animation to finish
      setTimeout(() => {
        const winningAmount = segments[randomSegment];
        isSpinning = false;
  
        // Prompt for user name after the wheel stops
        const userName = prompt(`Congratulations! You won $${winningAmount}. Please enter your name:`);
  
        if (userName) {
          // Save user data and navigate to plane betting game page
          localStorage.setItem("userName", userName);
          localStorage.setItem("balance", winningAmount);
          window.location.href = "plane-betting-game.html";
        } else {
          alert("Please enter a valid name to proceed.");
        }
      }, 4000); // Match the timeout with the animation duration
    });
  });
  