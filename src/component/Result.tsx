import React from 'react'; 
import Button from "@mui/material/Button";
import { State } from "../logic/quizLogic";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function Result(props: {
    buttonHandler: (code: string) => void;
    state: State;
}) {
    function createData(
        def1: string,
        def2: string,
        atk:  string,
        correctAnswer: number,
        yourAnswer: number,
        rightOrWrong: string,
        rowColor: string
    ) {
        return {def1, def2, atk, correctAnswer, yourAnswer, rightOrWrong, rowColor};
    }
    function createRows(
        state: State,
    ) {
        let rows = Array(0);
        if (state.isResult) {
            state.questions.map((questionSet, index) => {
                const def2 = questionSet.defenceType2 ? questionSet.defenceType2.name : ''
                const isCorrect = questionSet.correctAnswer === state.answers[index]
                const rightOrWrong = isCorrect ? '○' : '×'
                const rowColor = isCorrect ? '#98fb98' : '#eaeaea'
                rows.push(createData(
                    questionSet.defenceType1.name,
                    def2,
                    questionSet.attackType.name,
                    questionSet.correctAnswer,
                    state.answers[index],
                    rightOrWrong,
                    rowColor
                ))
            })
        }
        console.log(rows)
        return (
            rows.map((row, index) => (
                <TableRow key={index + 1} sx={{backgroundColor:row.rowColor}}>
                    <TableCell sx={{textAlign:'center'}}>{index + 1}</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.def1}</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.def2}</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.atk}</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.correctAnswer}倍</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.yourAnswer}倍</TableCell>
                    <TableCell sx={{textAlign:'center'}}>{row.rightOrWrong}</TableCell>
                </TableRow>
            ))
        )
    }
    const state = props.state
    const correctRate =  state.answers.length === 0 ? 0 : Math.round(( state.numCorrect/ state.answers.length)*100)
    return (
        <div>
            { state.isResult &&
            <div>
                <Typography sx={{ fontSize:26, mt:1, mb:2}} >結果</Typography>
                <Typography sx={{ fontSize: 20, mt:1, mb:2}} >
                    {state.totalQuizNum}問中 {state.numCorrect}問正解！ (正答率:{correctRate}%)
                </Typography>
                <TableContainer>
                    <Table size="small" sx={{width:800, mx:"auto", mb:2}}>
                        <TableHead sx={{backgroundColor:'#cccccc'}}>
                            <TableCell sx={{textAlign:'center'}}>問題No.</TableCell>
                            <TableCell sx={{textAlign:'center'}}>防御タイプ1</TableCell>
                            <TableCell sx={{textAlign:'center'}}>防御タイプ2</TableCell>
                            <TableCell sx={{textAlign:'center'}}>攻撃タイプ</TableCell>
                            <TableCell sx={{textAlign:'center'}}>正答</TableCell>
                            <TableCell sx={{textAlign:'center'}}>あなたの答え</TableCell>
                            <TableCell sx={{textAlign:'center'}}>正誤</TableCell>
                        </TableHead>
                        <TableBody>
                            {createRows(state)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button size="small" sx={{ m: 2 }} variant='contained' onClick={() => props.buttonHandler("リトライ")} >リトライ</Button>
            </div>
            }
        </div>
    )
}