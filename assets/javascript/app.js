function checker() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Gregor Clegane") {
        correct++;
    }

    if (question2 == "Queen") {
        correct++;
    }

    if (question3 == "Run") {
        correct++;
    }

    alert("You got " + correct + " correct!");
}



