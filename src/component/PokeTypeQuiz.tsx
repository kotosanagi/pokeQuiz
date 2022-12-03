import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useState } from 'react';
import makeQuestions from '../logic/makeQuestions';
import quizLogic, { State } from '../logic/quizLogic';
import { useWindowDimensions } from '../logic/useWindowDimensions';
import Answer from "./Answer";
import Header from './Header';
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
    const { width, height } = useWindowDimensions();
    const headerHeight = 40;

    return (
        <Box sx = {{height:height,width:width, mx:"auto", backgroundColor:'#fafafa'}}>
            <Box sx = {{mx:"auto"}}>
                <Header headerHeight={headerHeight} />
            </Box>
            <Box sx = {{height: height-headerHeight, width:width, mx:"auto", display:'flex', justifyContent:'center', alignItems:'center'}}>
                { !state.isResult &&
                    <Card sx = {{width:600, minHeight: 430, mx:"auto"}}>
                        <CardContent>
                            <Question state={state}/>
                            <Answer buttonHandler={buttonHandler} state={state} />
                        </CardContent>
                    </Card>
                }
                { state.isResult &&
                    <Card sx = {{maxWidth:850, minHeight: 430, mx:"auto"}}>
                        <Result buttonHandler={buttonHandler} state={state} />
                    </Card>
                }
            </Box>
        </Box>
    );
}