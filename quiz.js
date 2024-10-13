document.getElementById('submit-answer').addEventListener('click', function() {
    // Get the selected radio button
    const choices = document.getElementsByName('quiz');
    let selectedAnswer;
    for (const choice of choices) {
        if (choice.checked) {
            selectedAnswer = choice.value;
            break;
        }
    }

    // Check if an answer was selected
    if (!selectedAnswer) {
        document.getElementById('feedback').innerText = 'Please select an answer.';
        return;
    }

    // Provide feedback based on the selected answer
    const feedback = document.getElementById('feedback');
    if (selectedAnswer === '4') {
        feedback.innerText = 'Correct! 2 + 2 is 4.';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = 'Incorrect. Try again.';
        feedback.style.color = 'red';
    }
});
