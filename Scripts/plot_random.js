const btn = document.getElementById('myBtn');
const input = document.getElementById('myInput');
const output = document.getElementById('greeting_string');
const answer = document.getElementById('answer');

answer.style.display = "none";

// Click event
btn.addEventListener('click', () => {
    answer.style.display = "block";
    if (input.value.trim() === "") {
        output.textContent = "Please enter a valid name";
    }
    else {
        output.textContent = "Welcome, " + input.value + "!";
    }
    output.style.margin = "0";
});

