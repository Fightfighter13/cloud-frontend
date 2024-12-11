const axios = require('axios');

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log the values in the console to check if getElementById works
    console.log('Email:', email);
    console.log('Password:', password);

    // Display the values on the webpage under the form
    document.getElementById('response').innerHTML = `
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
            `;

    const serviceUrl = 'http://localhost:3000/validate-login';

    // Send login data to the service
    axios.post(serviceUrl, { email, password })
        .then(response => {
            // Display the success response
            document.getElementById('response').innerHTML = `<p style="color: green;">${response.data}</p>`;
        })
        .catch(error => {
            // Display error message
            document.getElementById('response').innerHTML = `<p style="color: red;">${error.response.data}</p>`;
        });
});