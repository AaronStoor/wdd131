// Function to dynamically populate navigation menu
function populateNavigation() {
    const navItems = [
        { name: "Home", link: "index.html" },
        { name: "Beginner Tips", link: "Tips.html" },
        { name: "Golf Etiquette", link: "Etiquette.html" },
        { name: "Improvement Strategies", link: "improve.html" },
        { name: "Contact", link: "contact.html" }
    ];

    const navList = document.querySelector("nav ul");
    navItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
        navList.appendChild(li);
    });
}

// Function to dynamically populate beginner tips
function populateTips() {
    const tips = [
        "Start with basic equipment.",
        "Practice your swing at a driving range.",
        "Learn the rules and scoring system of golf.",
        "Take lessons from a golf instructor.",
        "Focus on your short game (putting and chipping)."
    ];

    const tipsList = document.getElementById("tips-list");
    if (tipsList) {
        tips.forEach(tip => {
            const li = document.createElement("li");
            li.textContent = tip;
            tipsList.appendChild(li);
        });
    }
}

// Function to dynamically populate etiquette rules
function populateEtiquette() {
    const etiquetteRules = [
        "Be quiet and still when others are taking their shots.",
        "Repair divots and ball marks on the course.",
        "Keep pace with the group ahead of you.",
        "Respect the course by following cart path rules.",
        "Yell 'Fore!' if your ball is heading toward another player."
    ];

    const etiquetteList = document.getElementById("etiquette-list");
    if (etiquetteList) {
        etiquetteRules.forEach(rule => {
            const li = document.createElement("li");
            li.textContent = rule;
            etiquetteList.appendChild(li);
        });
    }
}

// Function to handle form submission and store data in localStorage
function handleFormSubmission() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Save form data to localStorage
            const formData = { name, email, message };
            localStorage.setItem("contactFormData", JSON.stringify(formData));

            // Display a success message
            const successMessage = document.createElement("p");
            successMessage.textContent = "Thank you for your message! We'll get back to you soon.";
            successMessage.style.color = "green";
            form.appendChild(successMessage);

            // Clear the form
            form.reset();
        });
    }
}

// Function to display a welcome message based on localStorage
function displayWelcomeMessage() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
        const visitCount = localStorage.getItem("visitCount") || 0;
        const newVisitCount = parseInt(visitCount) + 1;
        localStorage.setItem("visitCount", newVisitCount);

        welcomeMessage.textContent = `Welcome back! You've visited this site ${newVisitCount} times.`;
    }
}

// Function to initialize the page
function initializePage() {
    populateNavigation();
    populateTips();
    populateEtiquette();
    handleFormSubmission();
    displayWelcomeMessage();
}

// Run the initializePage function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePage);