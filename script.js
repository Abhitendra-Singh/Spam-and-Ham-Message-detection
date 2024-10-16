document.getElementById('classifier-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;

    fetch('http://127.0.0.1:5000/classify', {  // Ensure this URL matches your Flask server URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        const resultElement = document.getElementById('result');
        resultElement.textContent = data.result;
    })
    .catch(error => console.error('Error:', error));
});
