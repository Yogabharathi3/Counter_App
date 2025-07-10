# Counter_App
## Date:10.07.2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Write your message</h1>
  <textarea id="message" placeholder="Type something..."></textarea>
  <p id="counter">Characters: 0</p>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  margin-bottom: 15px;
  color: #333;
}

textarea {
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: none;
}

#counter {
  margin-top: 10px;
  font-weight: bold;
  color: #555;
}
```
## Javascript Code:
```
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
textarea.addEventListener('input', () => {
  const count = textarea.value.length;
  counter.innerText = `Characters: ${count}`;
});
```
## Output:
![image](https://github.com/user-attachments/assets/2bccff32-48e8-43e9-9294-e48e3e96debf)

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
