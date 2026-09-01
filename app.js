const PUBLIC_KEY = "_mY4VegYum33IJKBv";
const SERVICE_ID = "service_t01kvd9";
const TEMPLATE_ID = "template_oyglr7i";

emailjs.init({
    publicKey: PUBLIC_KEY
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = document.querySelector(".submit-button");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;

    submitButton.innerHTML = `
        SENDING...
        <span>↗</span>
    `;

    formStatus.textContent = "Sending your message...";

    emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        contactForm
    )

    .then(function (response) {

        console.log(
            "SUCCESS!",
            response.status,
            response.text
        );

        formStatus.textContent =
            "✓ Message sent successfully! I'll get back to you soon.";


        contactForm.reset();

        submitButton.disabled = false;

        submitButton.innerHTML = originalButtonText;

    })

    .catch(function (error) {

        console.error(
            "EMAILJS ERROR:",
            error
        );

        formStatus.textContent =
            "✕ Something went wrong. Please try again.";

        submitButton.disabled = false;

        submitButton.innerHTML = originalButtonText;

    });

});