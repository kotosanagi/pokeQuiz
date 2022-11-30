import React from 'react'; 
import Button from "@mui/material/Button";
import { State } from '../logic/quizLogic';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import { TableCell, TableRow } from '@mui/material';

export default function Answer(props: {
    buttonHandler: (code: string) => void;
    state: State;
}) {
    const state = props.state
    const question = state.questions[state.nowQuizNum - 1]
    const answer = state.answers[state.nowQuizNum-1]
    return (
        <div>
            { state.isQuestion && !state.isResult &&
            <Box sx={{m:4}}>
                <Box>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("0")} >0倍</Button>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("0.25")} >0.25倍</Button>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("0.5")} >0.5倍</Button>
                </Box>
                <Box>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("1")} >1倍</Button>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("2")} >2倍</Button>
                    <Button size="small" sx={{ m: 1 }} variant='contained' onClick={() => props.buttonHandler("4")} >4倍</Button>
                </Box>
            </Box>
            }
            { !state.isQuestion &&
            <div>
                <div>
                    { question.correctAnswer === answer
                        ? <Box sx={{fontSize:24, color:'green', m:2}}>正解！！！ </Box>
                        : <Box sx={{fontSize:24, color:'blue', m:2}}>不正解...</Box>
                    }
                    {
                        <Table size="small" sx={{width:200, mx:"auto", mb:2}}>
                            <TableRow>
                                <TableCell>正答</TableCell>
                                <TableCell>{question.correctAnswer}倍</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>あなたの回答</TableCell>
                                <TableCell>{answer}倍</TableCell>
                            </TableRow>
                        </Table>
                    }
                    <Button 
                        size="small"
                        sx={{ m: 0.5 }}
                        variant='contained'
                        onClick={() => props.buttonHandler("次へ")} 
                    >次へ</Button>
                </div>
            </div>
            }
        </div>
    );
}