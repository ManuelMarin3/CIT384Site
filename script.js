// Initialize EmailJS with your Public Key
emailjs.init("DL-cnHIDW2IBtgseU"); // Replace with your Public Key

// Listen for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("384Site", "template_dx33wjy", {
        name: name,       // Matches {{name}} in your EmailJS template
        email: email,     // Matches {{email}} in your EmailJS template
        message: message  // Matches {{message}} in your EmailJS template
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    }, (error) => {
        console.log('FAILED...', error);
        alert('Oops! Something went wrong. Please try again.');
    });
});