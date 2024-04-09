// Przykładowa "pozycja" i odpowiedź (w prawdziwej aplikacji, pozycje byłyby bardziej złożone)
const correctAnswer = 3; // Dla przykładu, prawidłowa odpowiedź

function checkAnswer() {
    const userAnswer = document.getElementById("userAnswer").value;
    const feedbackElement = document.getElementById("feedback");

    if (parseInt(userAnswer) === correctAnswer) {
        feedbackElement.textContent = "Brawo! Twoja odpowiedź jest prawidłowa.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Nieprawidłowo. Spróbuj ponownie.";
        feedbackElement.style.color = "red";
    }
}

// Inicjalizacja szachownicy po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    var board = Chessboard('chessboard', 'r1bq1rk1/pp2ppbp/2np1np1/6B1/3NP3/2N4P/PPPQ1PP1/2KR1B1R b - - 0 9');
});
