
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#bg");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

function copyToClipboard(text, feedbackElement, buttonElement) { // Function to copy to clipboard and show feedback
    navigator.clipboard.writeText(text).then(function() {
        // Hide the button text and icon while the feedback is visible
        if (buttonElement) {
            buttonElement.querySelector('i').style.display = 'none'; // Hide the icon
            buttonElement.querySelector('p').style.display = 'none'; // Hide the text
        }

        // Show feedback if exists
        if (feedbackElement) {
            feedbackElement.style.display = 'block';
            setTimeout(function() {
                // Hide feedback after 2 seconds
                feedbackElement.style.display = 'none';

                // Remove the feedback from the DOM after feedback disappears
                if (feedbackElement.parentElement) {
                    feedbackElement.parentElement.removeChild(feedbackElement);
                }

                // Show the button text and icon again after feedback disappears
                if (buttonElement) {
                    // Reset button text and icon visibility
                    buttonElement.querySelector('i').style.display = 'inline'; // Show the icon
                    buttonElement.querySelector('p').style.display = 'inline'; // Show the text
                }
            }, 2000); // Hide feedback after 2 seconds
        }
    }).catch(function(error) {
        console.error('Copy failed: ', error);
    });
}

// Event listener for the email button
document.getElementById('copy-email-button').addEventListener('click', function() {
    const email = 'ryoda@wp.pl';
    let feedback = this.querySelector('.copy-feedback');
    
    // If feedback does not exist, create it
    if (!feedback) {
        feedback = document.createElement('p');
        feedback.classList.add('copy-feedback');
        feedback.textContent = 'Email copied!';
        feedback.style.color = '#90EE90';  // Lighter green color
        feedback.style.marginTop = '10px';
        this.appendChild(feedback);
    }

    const button = document.getElementById('copy-email-button');
    copyToClipboard(email, feedback, button);
});

// Event listener for the telegram button
document.getElementById('copy-telegram-button').addEventListener('click', function() {
    const telegramHandle = '@Ryoday';
    let feedback = this.querySelector('.copy-feedback');
    
    // If feedback does not exist, create it
    if (!feedback) {
        feedback = document.createElement('p');
        feedback.classList.add('copy-feedback');
        feedback.textContent = 'Сopied!';
        feedback.style.color = '#90EE90';  // Lighter green color
        feedback.style.marginTop = '10px';
        this.appendChild(feedback);
    }

    const button = document.getElementById('copy-telegram-button');
    copyToClipboard(telegramHandle, feedback, button);
});

