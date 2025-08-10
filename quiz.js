// quiz.js

// Define the function to check the user's answer.
function checkAnswer() {
    // 1. Identify the correct answer.
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer.
    // Use querySelector to get the radio input that is currently checked.
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = '';
    
    // Check if an input was actually selected to prevent errors.
    if (selectedInput) {
        userAnswer = selectedInput.value;
    }

    // 3. Get the feedback element.
    const feedbackElement = document.getElementById('feedback');

    // 4. Compare the answers and update the feedback.
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button.
// This ensures that the checkAnswer function is called only when the button is clicked.
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
