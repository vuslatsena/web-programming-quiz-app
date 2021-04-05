import {getRandomQuizzes} from "../src/quizzes";

test('Geçersiz quiz',()=>{
    expect(()=>getRandomQuizzes(-1)).toThrow();
    expect(()=>getRandomQuizzes(0)).toThrow();
    expect(()=>getRandomQuizzes(9999999)).toThrow();

});


test('tek test',()=>{
    const quiz = getRandomQuizzes(1);

    expect(quiz.length).toBe(1);
    expect(quiz[0].question).toBeDefined();
    expect(quiz[0].answers).toBeDefined();
    expect(quiz[0].answers.length).toBe(4);
})

test('iki test',()=>{
    for(let i=0;i<100;i++){
        const quizzes = getRandomQuizzes(2);

        expect(quizzes.length).toBe(2);
        expect(quizzes[0].question).not.toBe(quizzes[1].question);
    }
})
