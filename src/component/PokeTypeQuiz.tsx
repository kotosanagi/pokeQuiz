import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useState } from 'react';
import makeQuestions from '../logic/makeQuestions';
import quizLogic, { State } from '../logic/quizLogic';
import Answer from "./Answer";
import Question from "./Question";
import Result from './Result';

export default function PokeTypeQuiz() {

    const totalQuizNum = 10;
    const questions = makeQuestions(totalQuizNum);

    const [state, setState] = useState<State>({
        nowQuizNum: 1,
        totalQuizNum: totalQuizNum,
        isQuestion: true,
        numCorrect: 0,
        isResult: false,
        questions: questions,
        answers: []
    });

    const buttonHandler = (code: string ) => {
        const nextState = quizLogic(code, state);
        setState(nextState);
    }

    return (
    <Box sx = {{height: "auto", mx:"auto"}}>
        { !state.isResult &&
            <Box>
                <Card sx = {{maxWidth:600, minHeight: 430, mx:"auto"}}>
                    <CardContent>
                        <Question state={state}/>
                        <Answer buttonHandler={buttonHandler} state={state} />
                    </CardContent>
                </Card>
            </Box>
        }
        { state.isResult &&
            <Result buttonHandler={buttonHandler} state={state} />
        }
    </Box>
    );
}