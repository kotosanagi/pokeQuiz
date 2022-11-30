import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { State } from '../logic/quizLogic';

export default function Question(props: {
    state: State;
}) {
    const state = props.state
    const question = state.questions[state.nowQuizNum - 1]
    const correctRate = state.answers.length === 0 ? 0 : Math.round((state.numCorrect/state.answers.length)*100)

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
            {question.defenceType2 &&
                    <Box sx={{display: 'flex', m:1}}>
                        <Box sx={{display: 'flex'}}>
                            <Box sx={{ width:88, fontSize:16, backgroundColor:'#992222', borderRadius:1 }}>{question.defenceType1}</Box>
                            <Box sx={{ width:10, mx:0.5}}>/</Box>
                            <Box sx={{ width:88, fontSize:16, backgroundColor:'#992222', borderRadius:1 }}>{question.defenceType2}</Box>
                        </Box>
                        <Box>
                            タイプの相手に
                        </Box>
                    </Box>
                }
                {!question.defenceType2 &&
                    <Box sx={{display: 'flex', m:1}}>
                        <Box sx={{ width:88, fontSize:16, backgroundColor:'#992222', borderRadius:1 }}>{question.defenceType1}</Box>
                        <Box>
                            タイプの相手に
                        </Box>
                    </Box>
                }
            </Grid>
            <Grid container alignItems='center' justifyContent='center' direction="column">
                <Box sx={{display: 'flex', m:1}}>
                    <Box sx={{ width:88, fontSize:16, backgroundColor:'#992222', borderRadius:1 }}>
                        {question.attackType}
                    </Box>
                    <Box>
                        タイプの攻撃技は？
                    </Box>
                </Box>
            </Grid>
        </div>
        }
    </div>
    );
}