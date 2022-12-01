import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { State } from '../logic/quizLogic';
import PokeTypeBox from './PokeTypeBox';

export default function Question(props: {
    state: State;
}) {
    const state = props.state
    const question = state.questions[state.nowQuizNum - 1]
    const correctRate = state.answers.length === 0 ? 0 : Math.round((state.numCorrect/state.answers.length)*100)
    const defType = () => {
        let defTypeIcon;
        if (question.defenceType2) {
            defTypeIcon = (
                <Box sx={{display: 'flex'}}>
                    <PokeTypeBox pokeType={question.defenceType1} />
                    <Box sx={{ width:10, mx:0.5}}>/</Box>
                    <PokeTypeBox pokeType={question.defenceType2} />
                </Box>
            )
        } else {
            defTypeIcon = <PokeTypeBox pokeType={question.defenceType1} />
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
        return (
            <Box sx={{display: 'flex', m:1}}>
                <PokeTypeBox pokeType={question.attackType} />
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