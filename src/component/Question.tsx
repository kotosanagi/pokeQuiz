import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react';
import { State } from '../logic/quizLogic';

export default function Question(props: {
    state: State;
}) {
    const state = props.state
    const question = state.questions[state.nowQuizNum - 1]
    const defType = question.defenceType2 ? question.defenceType1 + '/' + question.defenceType2 : question.defenceType1
    const atkType = question.attackType
    const correctRate = state.answers.length === 0 ? 0 : Math.round((state.numCorrect/state.answers.length)*100)

    return (
    <div>
        { !state.isResult && 
        <div>
            <div>
                現在の正答数：{state.numCorrect} (正答率:{correctRate}%)
            </div>
            <br />
            Q{state.nowQuizNum}(全{state.totalQuizNum}問)
            <br />
            <Box sx={{my:1}}>
                {defType}タイプの相手に
                <br />
                {atkType}タイプの攻撃技は？
            </Box>
        </div>
        }
    </div>
    );
}