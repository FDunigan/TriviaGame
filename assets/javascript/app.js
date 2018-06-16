var i = 30;

function timer() {
    var x = document.getElementById("timer").innerHTML = i;
    i--;
}

var m = setInterval("timer()", 1000);

function xx() {
    clearInterval(m);
}

setTimeout("xx()", 31000);

function checker() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;  
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

    if (question4 == "Harry S. Truman") {
        correct++;
    }

    if (question5 == "Kareem Abdul-Jabbar") {
        correct++;
    }

    alert("You got " + correct + " correct!");
}



