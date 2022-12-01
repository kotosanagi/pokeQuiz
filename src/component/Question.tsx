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
        if (question.defenceType2) {
            const def1Color = pokeTypes[0].color
            const def2Color = pokeTypes[12].color
            defTypeIcon = 
                <Box sx={{display: 'flex'}}>
                    <Box sx={{ width:88, fontSize:16, backgroundColor:def1Color, borderRadius:1 }}>
                        {question.defenceType1}
                    </Box>
                    <Box sx={{ width:10, mx:0.5}}>
                        /
                    </Box>
                    <Box sx={{ width:88, fontSize:16, backgroundColor:def2Color, borderRadius:1 }}>
                        {question.defenceType2}
                    </Box>
                </Box>
        } else {
            defTypeIcon = <Box sx={{ width:88, fontSize:16, backgroundColor:'#992222', borderRadius:1 }}>{question.defenceType1}</Box>
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
        const atkColor = pokeTypes[0].color
        const color0 = pokeTypes[0].color
        const color1 = pokeTypes[1].color
        const color2 = pokeTypes[2].color
        const color3 = pokeTypes[3].color
        const color4 = pokeTypes[4].color
        const color5 = pokeTypes[5].color
        const color6 = pokeTypes[6].color
        const color7 = pokeTypes[7].color
        const color8 = pokeTypes[8].color
        const color9 = pokeTypes[9].color
        const color10 = pokeTypes[10].color
        const color11 = pokeTypes[11].color
        const color12 = pokeTypes[12].color
        const color13 = pokeTypes[13].color
        const color14 = pokeTypes[14].color
        const color15 = pokeTypes[15].color
        const color16 = pokeTypes[16].color
        const color17 = pokeTypes[17].color
        return (
            <Box sx={{display: 'flex', m:1}}>
                <Box sx={{ width:88, fontSize:16, backgroundColor:atkColor, borderRadius:1 }}>
                    {question.attackType}
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