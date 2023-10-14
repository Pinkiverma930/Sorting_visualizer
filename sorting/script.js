function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        window.location.href = "contact.html";
        return false;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}

const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

function submitFeedback() {
    // Handle form submission here (e.g., send data to the server)
    // For now, we'll just display a "Thank you" message
    const message = document.getElementById("message");
    message.innerHTML = "Thank you for your feedback!";
    message.style.color = "#007BFF";
    return false;
}
