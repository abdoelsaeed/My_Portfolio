let confettiLaunched = false;

document.getElementById('copyButton').addEventListener('click', function() {
    const copyButton = document.getElementById('copyButton');
    const emailToCopy = document.getElementById('emailAddress').textContent;

    if (!confettiLaunched) {
        navigator.clipboard.writeText(emailToCopy)
            .then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Email is Copied!';

                const buttonRect = copyButton.getBoundingClientRect();

                confetti({
                    particleCount: 100,
                    spread: 50,
                    scalar: 0.8,
                    origin: {
                        x: buttonRect.left / window.innerWidth,
                        y: buttonRect.top / window.innerHeight
                    }
                });
                             
                confettiLaunched = true;
               
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('عذراً، حدث خطأ أثناء النسخ.');
            });
    }
});






