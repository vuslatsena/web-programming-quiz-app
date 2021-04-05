const quizzes = [
    {
        question: "JavaScript hangi tipte dildir?",
        answer_0: "Güçlü ve statik yazımlı",
        answer_1: "Güçlü ve dinamik yazımlı",
        answer_2: "Zayıf ve statik yazımlı",
        answer_3: "Zayıf ve dinamik yazımlı",
        indexOfRightAnswer: 3
    },
    {
        question: "JavaScript dilinde aşağıda verilen kodun çıktısı nedir? \n\n+(!![]+!![]+!![]+!![]+[]+(!![]+!![]))",
        answer_0: "Derleme hatası",
        answer_1: "Çalışma zamanı hatası",
        answer_2: "42",
        answer_3: "'42'",
        indexOfRightAnswer: 2
    },
    {
        question: "JavaScript dilinde false + true ifadesinin çıktısı nedir?",
        answer_0: "false",
        answer_1: "true",
        answer_2: "'falsetrue'",
        answer_3: "1",
        indexOfRightAnswer: 3
    }
];

let latestIndex;
const newQuiz = () => {
    let index = Math.floor(Math.random()*quizzes.length);
    //Yeni uretilen indeks eski indeks ile ayni ise bir sonraki soruya gecer.
    if(latestIndex === index) {
        index = (index+1)%quizzes.length;
    }
    const quiz = quizzes[index];
    latestIndex = index;
    displayQuiz(quiz)
}
const displayQuiz = (quiz) => {
    const { question, answer_0,answer_1,answer_2,answer_3, indexOfRightAnswer } = quiz; //esdegeri quiz.question, quiz.answer_0 ...

    /*quizDivId isimli div icerigini degistirmek icin html uretiyoruz. Ilk olarak soruya ait html uretilir ardindan cevaplar.
    Cevaplarin yapisi biraz daha karmasik ve tekrar eden bir yapi oldugu icin bir fonksiyon icinde uretmeyi tercih ettik. */
    let html = "<p class='question'>Soru: "+question+"</p>\n";
    html += getAnswerTag("A:", answer_0,indexOfRightAnswer===0);
    html += getAnswerTag("B:", answer_1,indexOfRightAnswer===1);
    html += getAnswerTag("C:", answer_2,indexOfRightAnswer===2);
    html += getAnswerTag("D:", answer_3,indexOfRightAnswer===3);
    const quizDiv = document.getElementById("quizDivId");
    quizDiv.innerHTML = html;

}

const getAnswerTag = (prefix, answer, isCorrect) => {
    let onclick;
    if(isCorrect){
        onclick = "alert('Doğru Cevap'); newQuiz();"
    } else {
        onclick = "alert('Yanlış Cevap');"
    }

    const html = "<div class ='answer' onclick = \""+onclick+"\">"+prefix+answer+"</div>"
    return html;
}

// https://www.youtube.com/watch?v=XOMw3oO27kM