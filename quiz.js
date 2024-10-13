// Function to check the user's answer and give feedback
function checkAnswer() {
    // Retrieve the correct answer (hardcoded for this quiz)
    const correctAnswer = '4';

    // Retrieve the user's selected answer
    const choices = document.getElementsByName('quiz');
    let selectedAnswer;
    for (const choice of choices) {
        if (choice.checked) {
            selectedAnswer = choice.value;
            break;
        }
    }

    // Check if an answer was selected
    const feedback = document.getElementById('feedback');
    if (!selectedAnswer) {
        feedback.innerText = 'Please select an answer.';
        feedback.style.color = 'orange';
        return;
    }

    // Compare the user's selected answer with the correct answer
    if (selectedAnswer === correctAnswer) {
        // Provide feedback for the correct answer
        feedback.innerText = 'Correct! 2 + 2 is 4.';
        feedback.style.color = 'green';
    } else {
        // Provide feedback for the incorrect answer
        feedback.innerText = 'Incorrect. Try again.';
        feedback.style.color = 'red';
    }
}

// Retrieve the "Submit Answer" button and add an event listener
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
