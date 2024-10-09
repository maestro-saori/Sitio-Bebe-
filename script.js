// Donation Tracker
function updateDonationTracker(donationAmount) {
    let totalDonations = document.getElementById("totalDonations").innerText;
    totalDonations = parseInt(totalDonations) + donationAmount;
    document.getElementById("totalDonations").innerText = totalDonations;

    // Change the progress bar visually
    let progressBar = document.getElementById("donationProgress");
    progressBar.style.width = (totalDonations / 2000) * 100 + "%"; // Assuming a ₱2000 goal
}

// Chat Commands
function handleChatCommand(command) {
    let chatResponse;
    switch (command.toLowerCase()) {
        case "hello":
            chatResponse = "Hello, gamers! Glad to have you in the stream!";
            break;
        case "donate":
            chatResponse = "You can support the stream by clicking on the donation link above.";
            break;
        case "rules":
            chatResponse = "Please keep the chat friendly and avoid spamming!";
            break;
        default:
            chatResponse = "Unknown command. Try hello, donate, or rules.";
    }
    document.getElementById("chatBox").innerText += `\n${chatResponse}`;
}


