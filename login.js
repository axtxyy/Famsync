document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById("email").value.trim();
    const famcode = document.getElementById("famcode").value.trim();

    // Basic validation
    if (email === "" || famcode === "") {
        alert("All fields are required!");
        return;
    }

    // Further validation like regex for email and famcode
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{6}$/;
    const famcodeRegex = /^[0-9]{6}$/;

    if (emailRegex.test(email) || emailRegex.test(email)) {
        alert("Please enter a valid email or phone number");
        return;
    }

    if (!famcodeRegex.test(famcode)) {
        alert("Please enter a valid 6-digit famcode.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    this.submit(); // Submit the form
});
