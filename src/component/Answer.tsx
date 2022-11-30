import React from 'react'; 
import Button from "@mui/material/Button";
import { State } from '../logic/quizLogic';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Question from './Question';

export default function Answer(props: {
    buttonHandler: (code: string) => void;
    state: State;
}) {
    const defType1List = props.state.questions.map(question => <div>{question.defenceType1}</div>);
    const defType2List = props.state.questions.map(question => <div>{question.defenceType2}</div>);
    const attackTypeList = props.state.questions.map(question => <div>{question.attackType}</div>);
    const correctAnswerList = props.state.questions.map(question => <div>{question.correctAnswer}</div>);
    const answerList = props.state.answers.map(answer => <div>{answer}</div>);
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
            { props.state.isQuestion && !props.state.isResult &&
            <div>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("0")} >0倍</Button>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("0.25")} >0.25倍</Button>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("0.5")} >0.5倍</Button>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("1")} >1倍</Button>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("2")} >2倍</Button>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("4")} >4倍</Button>
            </div>
            }
            { !props.state.isQuestion &&
            <div>
                <div>
                    { props.state.questions[props.state.nowQuizNum-1].correctAnswer === props.state.answers[props.state.nowQuizNum-1]
                    ?
                        <div><b>正解！</b></div>
                    :
                        <div><b>不正解...</b></div>
                    }
                    {
                        <div>
                            正答:{props.state.questions[props.state.nowQuizNum-1].correctAnswer}
                            <br />
                            あなたの回答:{props.state.answers[props.state.nowQuizNum-1]}
                        </div>
                    }
                    <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("次へ")} >次へ</Button>
                </div>
            </div>
            }
            { props.state.isResult &&
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>問題番号</TableCell>
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
                                    <TableCell>{row.correctAnswer}</TableCell>
                                    <TableCell>{row.yourAnswer}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button size="small" sx={{ m: 0.5 }} variant='contained' onClick={() => props.buttonHandler("リトライ")} >リトライ</Button>
            </div>
            }
        </div>
    );
}