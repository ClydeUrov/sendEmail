export const welcomeTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New client message</title>
</head>
<body>
    <h2>New client message</h2>
		<p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <p>Message: {{ message }}</p>
    <p>Source: {{ source }}</p>
</body>
</html>
`;