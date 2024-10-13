function checkAnswer() {
    const correctAnswer = "4";  // The correct answer for the quiz
    const selectedOption = document.querySelector('input[name="quiz"]:checked');  // Get the selected option
    const userAnswer = selectedOption ? selectedOption.value : null;  // Get the user's answer

    const feedbackElement = document.getElementById('feedback');  // Get the feedback element

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";  // Feedback for correct answer
        feedbackElement.style.color = "green";  // Optional: Make the text green
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";  // Feedback for incorrect answer
        feedbackElement.style.color = "red";  // Optional: Make the text red
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
