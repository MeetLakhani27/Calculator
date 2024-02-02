import React, { useState } from 'react'
import "./App.css";

export default function Calcu() {

    const [ans, setAns] = useState("");
    const [temp, setTemp] = useState("");
    const [cal, setCal] = useState("");

    const Plu = () => {
        if (cal === '+') {
            setAns(parseFloat(temp) + parseFloat(ans));
        }
        else if (cal === "-") {
            setAns(parseFloat(temp) - parseFloat(ans));
        }
        else if (cal === "*") {
            setAns(parseFloat(temp) * parseFloat(ans));
        }
        else if (cal === "/") {
            if (+ans !== 0) {
                setAns(parseFloat(temp) / parseFloat(ans));
            } else {
                setAns('can not divide by zero');
            }
        }
    }

    return (
        <>
            <div className='display'>
                <input type='text' placeholder='0' value={ans} readOnly className='align' />
            </div>
            <br />
            <div className='button1'>
                <div className='b1'>
                    <input type='button' onClick={(e) => { setAns('') }} value="clr" className='btn1'></input>
                    <input type='button' onClick={(e) => { setAns(ans.substring(0, ans.length - 1)) }} value="c" className='btn1' ></input>
                    <input type='button' onClick={(e) => {
                        setCal(e.target.value)
                        setTemp(ans)
                        setAns('');
                    }} value='+' className='btn1'></input>
                </div>
            </div>
            <br />
            <div className='button2'>
                <div className='b2'>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={1} className='btn2'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={2} className='btn2'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={3} className='btn2'></input>
                    <input type='button' onClick={(e) => {
                        setCal(e.target.value)
                        setTemp(ans)
                        setAns('');
                    }} value='-' className='btn2'></input>
                </div>
            </div>

            <br />
            <div className="button3">
                <div className="b3">
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={5} className='btn3'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={4} className='btn3'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={6} className='btn3'></input>
                    <input type='button' onClick={(e) => {
                        setCal(e.target.value)
                        setTemp(ans)
                        setAns('');
                    }} value='*' className='btn3' ></input>
                </div>
            </div>
            <br />
            <div className="button4">
                <div className="b4">
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={7} className='btn4'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={8} className='btn4'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={9} className='btn4'></input>
                    <input type='button' onClick={(e) => {
                        setCal(e.target.value)
                        setTemp(ans)
                        setAns('');
                    }} value='/' className='btn4' ></input>
                </div>
            </div>
            <br />
            <div className="button5">
                <div className="b5">
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={0} className='btn5'></input>
                    <input type='button' onClick={(e) => (setAns(ans + e.target.value))} value={"."} className='btn5'></input>
                    <input type='button' onClick={Plu} value={"="} className='btn5'></input>
                </div>
            </div>
            <br />

        </>
    )
}
