(function () {
    var Question, question1, question2, question3, questions, random, option, trackScore;

    // Question Constructor
    Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    // Display Question
    Question.prototype.display = function () {
        console.log(this.question);
        for (x in this.answers) {
            console.log(x + ': ' + this.answers[x]);
        }
    }

    // Check answer
    Question.prototype.checkAnswer = function (ans, score) {
        var sc;

        if (ans === this.correctAnswer) {
            console.log('The answer is correct!!!');
            sc = score('correct');
            this.displayScore(sc);
        } else if (ans === -1) {
            console.log('You have quit the game.');
        } else {
            console.log('The answer is incorrect');
            sc = score('incorrect');
            this.displayScore(sc);
        }
        ans === -1 ? '' : init();
    }

    // Display Score
    Question.prototype.displayScore = function (score) {
        console.log('Current Score: ' + score);
    }

    question1 = new Question(
        'What is your name?',
        [
            'Keyur', 'John', 'Mike'
        ],
        0
    );

    question2 = new Question(
        'What is your designation?',
        [
            'Developer', 'Designer', 'Doctor'
        ],
        0
    );

    question3 = new Question(
        'What is your hobby?',
        [
            'Swimming', 'Cricket', 'Football'
        ],
        1
    )

    questions = [question1, question2, question3];

    // Score Tracker
    function score() {
        var sc = 0;
        return function (result) {
            result === 'correct' ? sc++ : '';
            return sc;
        }
    }

    trackScore = score();

    // Initialize
    function init() {
        random = Math.floor(Math.random() * questions.length);

        // Display a random question
        questions[random].display();

        // Prompt
        option = parseInt(prompt('Question is in console. Enter your answer: To quit enter -1'));

        // Check Answer
        questions[random].checkAnswer(option, trackScore);
    }

    init();
})();