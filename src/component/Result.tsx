import React from 'react'; 
import Button from "@mui/material/Button";
import { State } from "../logic/quizLogic";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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
    ) {
        return {def1, def2, atk, correctAnswer, yourAnswer};
    }
    function createRows(
        state: State,
    ) {
        let rows = Array(0);
        if (state.isResult) {
            state.questions.map((questionSet, index) => {
                const def2 = questionSet.defenceType2 ? questionSet.defenceType2 : ''
                rows.push(createData(
                    questionSet.defenceType1,
                    def2,
                    questionSet.attackType,
                    questionSet.correctAnswer,
                    state.answers[index]
                ))
            })
        }
        return rows;
    }
    const rows = createRows(props.state);
    return (
        <div>
            { props.state.isResult &&
            <div>
                <p>結果一覧</p>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>問題No.</TableCell>
                            <TableCell>防御タイプ1</TableCell>
                            <TableCell>防御タイプ2</TableCell>
                            <TableCell>攻撃タイプ</TableCell>
                            <TableCell>正答</TableCell>
                            <TableCell>あなたの答え</TableCell>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                key={index + 1}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{row.def1}</TableCell>
                                    <TableCell>{row.def2}</TableCell>
                                    <TableCell>{row.atk}</TableCell>
                                    <TableCell>{row.correctAnswer}倍</TableCell>
                                    <TableCell>{row.yourAnswer}倍</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button size="small" sx={{ m: 2 }} variant='contained' onClick={() => props.buttonHandler("リトライ")} >リトライ</Button>
            </div>
            }
        </div>
    )
}