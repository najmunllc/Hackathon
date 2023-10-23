// JavaScript for the "Back to Home" button
document.querySelector(".back-button").addEventListener("click", function () {
    window.location.href = "index.html"; // Replace with the URL of your homepage
});
// JavaScript for Contact Us page
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the form for form submission
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the user's input from the form
        const fullName = document.querySelector("input[name='full-name']").value;
        const email = document.querySelector("input[name='email']").value;
        const message = document.querySelector("textarea").value;

        // Check if the input fields are not empty
        if (fullName.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields.");
        } else {
            // Here, you can handle the form submission, for example, send data to a server or show a thank you message.
            // Replace this with your actual form submission logic.
            alert("Form submitted successfully!");
        }
    });
});
