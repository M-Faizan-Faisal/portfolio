document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Your message has been sent!');
      // Optionally, handle form submission here (e.g., send to server)
    } else {
      alert('Please fill out all fields.');
    }
  });
  