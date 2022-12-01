import getDamageRate from "./getDamageRate";
import pokeType, { pokeTypeInterface } from "./pokeType";
import { QuestionSet } from "./quizLogic";

export default function makeQuestions(totalQuizNum: number): QuestionSet[] {
    const questionSet:QuestionSet[] =  new Array(0);
    // totalQuizNum個の問題セットを作成する
    for (let i=0; i < totalQuizNum; i++) {
        // やること
        // 1.defenceType1をランダムで取得する
        const defenceType1 = getRandomPokeType();
        // 2.defenceType2をランダムで取得する
        const defenceType2 = getRandomPokeType();
        // 3.attackTypeをランダムで取得する(2,3の処理は逆でも良い)
        const attackType = getRandomPokeType();
        // 4.倍率を計算する (defとatkを引数に、倍率が戻り値となる関数を呼ぶ)
        const correctAnswer = getDamageRate(defenceType1, defenceType2, attackType)
        // 5.def1とdef2が同じならdef2をnullにする
        const def2Name = (defenceType1.id === defenceType2.id) ? null : defenceType2

        // 6.上記4,5の倍率を掛け算し、correctAnswerとする
        questionSet.push({
            defenceType1: defenceType1,
            defenceType2: def2Name ,
            attackType: attackType,
            correctAnswer: correctAnswer
        });
    }
    return questionSet;
}

function getRandomPokeType(): pokeTypeInterface {
    const pokeTypes = pokeType();

    const randomNum = Math.floor(Math.random() * pokeTypes.length);
    return pokeTypes[randomNum];
}
