// Retrieve the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');

// Check for adding an event listener to the “Submit Answer” button
submitButton.addEventListener('click', function() {
    
    // Check for retrieval of the user’s selected answer
    const choices = document.getElementsByName('quiz');
    let selectedAnswer;
    
    for (const choice of choices) {
        if (choice.checked) {
            selectedAnswer = choice.value;
            break;
        }
    }

    // Retrieve the feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer was selected
    if (!selectedAnswer) {
        feedback.innerText = 'Please select an answer.';
        feedback.style.color = 'orange';
        return;
    }

    // Check for comparison of the user’s answer with the correct answer
    const correctAnswer = '4';

    // Check for providing feedback based on the comparison
    if (selectedAnswer === correctAnswer) {
        // Provide feedback for correct answer
        feedback.innerText = 'Correct! 2 + 2 is 4.';
        feedback.style.color = 'green';
    } else {
        // Provide feedback for incorrect answer
        feedback.innerText = 'Incorrect. Try again.';
        feedback.style.color = 'red';
    }
});
