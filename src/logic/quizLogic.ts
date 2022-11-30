import makeQuestions from "./makeQuestions";

export interface State {
    nowQuizNum: number;
    totalQuizNum: number;
    isQuestion: boolean;
    numCorrect: number;
    isResult: boolean;
    questions: QuestionSet[];
    answers: number[];
}

export interface QuestionSet {
    defenceType1: string;
    defenceType2?: string | null;
    attackType: string;
    correctAnswer: number;
}

export default function quizLogic(button: string, state: State) {
    console.log(state);
    if (isAnswerButton(button)) {
        return handleAnswerButton(button, state);
    }
    if (isNextButton(button)) {
        return handleNextButton(state);
    }
    if (isRetryButton(button)) {
        return handleRetryButton(state);
    }
    return state;
}

function isAnswerButton(button: string) {
    return (
        button === "0" ||
        button === "0.25" ||
        button === "0.5" ||
        button === "1" ||
        button === "2" ||
        button === "4"
    )
}
function isNextButton(button: string) {
    return (button === "次へ");
}
function isRetryButton(button: string) {
    return (button === "リトライ");
}


function handleAnswerButton(button: string, state: State): State {
    const nextNumCorrect = state.questions[state.nowQuizNum-1].correctAnswer == Number(button) ? state.numCorrect + 1 : state.numCorrect
    const nextAnswers = state.answers
    nextAnswers.push(Number(button));
    return {
        nowQuizNum: state.nowQuizNum,
        totalQuizNum: state.totalQuizNum,
        isQuestion: false,
        numCorrect: nextNumCorrect,
        isResult: false,
        questions: state.questions,
        answers: nextAnswers
    };
}
function handleNextButton(state: State): State {
    const resultFlg = (state.nowQuizNum === state.totalQuizNum);
    const nextQuizNum = state.nowQuizNum === state.totalQuizNum ? state.nowQuizNum : state.nowQuizNum + 1
    return {
        nowQuizNum: nextQuizNum,
        totalQuizNum: state.totalQuizNum,
        isQuestion: true,
        numCorrect: state.numCorrect,
        isResult: resultFlg,
        questions: state.questions,
        answers: state.answers
    };
}
function handleRetryButton(state: State): State {
    return {
        nowQuizNum: 1,
        totalQuizNum: state.totalQuizNum,
        isQuestion: true,
        numCorrect: 0,
        isResult: false,
        questions: makeQuestions(state.totalQuizNum),
        answers: []
    };
}