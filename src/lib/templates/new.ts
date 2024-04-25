export const newW = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form To Email Using JavaScript</title>
    <style>
        .container {
            width: 100%;
            height: 100vh;
            background: #001660;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        form {
            background: transparent;
            display: flex;
            flex-direction: column;
            padding: 2vw 4vw;
            width: 90%;
            max-width: 600px;
            border-radius: 10px;
            color: #fff;
        }

        form h3 {
            color: #fff;
            text-align: center;
        }

        input,
        textarea,
        button {
            margin: 10px 0;
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            cursor: pointer;
            background: #4CAF50;
            color: #fff;
            transition: background 0.3s ease;
        }

        button:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
<div class="container">
    <form onsubmit="sendEmail(); return false;">
        <h3>Contact Us</h3>
        <input type="text" id="firstName" placeholder="First Name" required />
        <input type="text" id="lastName" placeholder="Last Name" required />
        <input type="email" id="email" placeholder="Email id" required />
        <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
        <button type="submit">Send</button>
    </form>
</div>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
    function sendEmail() {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "vlad@sepirak.com",
            Password : "zo3ah82n",
            To : 'vlad@sepirak.com',
            From : document.getElementById("email").value,
            Subject : "New Contact from " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
            Body : document.getElementById("message").value
        }).then(
            message => alert("Email sent successfully")
        );
    }
</script>
</body>
</html>
`