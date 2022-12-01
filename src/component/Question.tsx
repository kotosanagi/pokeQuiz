import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { State } from '../logic/quizLogic';
import pokeType from '../logic/pokeType';

export default function Question(props: {
    state: State;
}) {
    const state = props.state
    const question = state.questions[state.nowQuizNum - 1]
    const correctRate = state.answers.length === 0 ? 0 : Math.round((state.numCorrect/state.answers.length)*100)
    const pokeTypes = pokeType()
    const defType = () => {
        let defTypeIcon;
        const def1Color = question.defenceType1.color
        if (question.defenceType2) {
            const def2Color = question.defenceType2.color
            defTypeIcon = 
                <Box sx={{display: 'flex'}}>
                    <Box sx={{ width:88, fontSize:16, backgroundColor:def1Color, borderRadius:1 }}>
                        {question.defenceType1.name}
                    </Box>
                    <Box sx={{ width:10, mx:0.5}}>
                        /
                    </Box>
                    <Box sx={{ width:88, fontSize:16, backgroundColor:def2Color, borderRadius:1 }}>
                        {question.defenceType2.name}
                    </Box>
                </Box>
        } else {
            defTypeIcon = <Box sx={{ width:88, fontSize:16, backgroundColor:def1Color, borderRadius:1 }}>{question.defenceType1.name}</Box>
        }
        return (
            <Box sx={{display: 'flex', m:1}}>
                {defTypeIcon}
                <Box>
                    タイプの相手に
                </Box>
            </Box>
        )
    }
    const atkType = () => {
        const atkColor = question.attackType.color
        return (
            <Box sx={{display: 'flex', m:1}}>
                <Box sx={{ width:88, fontSize:16, backgroundColor:atkColor, borderRadius:1 }}>
                    {question.attackType.name}
                </Box>
                <Box>
                    タイプの攻撃技は？
                </Box>
            </Box>
        )
    }
    return (
    <div>
        { !state.isResult && 
        <div>
            <Typography sx={{ fontSize: 14, mt:1, mb:2}} >
                現在の正答数：{state.numCorrect} (正答率:{correctRate}%)
            </Typography>
            <Typography sx={{ fontSize: 20, mt:4}} >
                Q{state.nowQuizNum}(全{state.totalQuizNum}問)
            </Typography>
            <br />
            <Grid container alignItems='center' justifyContent='center' direction="column">
                {defType()}
            </Grid>
            <Grid container alignItems='center' justifyContent='center' direction="column">
                {atkType()}
            </Grid>
        </div>
        }
    </div>
    );
}