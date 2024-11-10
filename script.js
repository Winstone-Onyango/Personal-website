document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name && email && message) {
            alert("Thank you for reaching out, " + name + "! We will get back to you shortly.");
            contactForm.reset(); // Clear form fields
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});

