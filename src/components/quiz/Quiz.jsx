import { useState, useEffect } from "react";
import {pointPyramid} from '../../data'
import {quiz} from '../../data'

const Quiz = ({user}) => {
    const [timer, setTimer] = useState(30)
    const [questionNbr, setQuestionNbr] = useState(1)
    const [stop, setStop] = useState(null)
    const [point, setPoint] = useState(0)
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [active , setActive] = useState('active')

    useEffect(() => {
        if(timer === 0) return setStop(true)
        const interval = setInterval(() => {
            setTimer(timer => timer -1)
            
        },1000);
        return () => clearInterval(interval)
    },[timer, setStop])


    useEffect(() => {
        setTimer(30)
    },[questionNbr])

    useEffect(() =>{
        setQuestion(quiz[questionNbr -1])

    },[questionNbr])

    const delay = (duration, callback) =>{
        setTimeout(() => {
            callback()
        }, duration)
    }


    const handleClick = (a) => {
        setSelectedAnswer(a)
        setActive('answer active')
        delay(300,() =>
            setActive(a.correct ? 'answer correct' : 'answer wrong')
        )
        delay(3000,() => {
            if(a.correct){
                setQuestionNbr(prev => prev+1)
                setSelectedAnswer(null)
            }else{
                setStop(true)
            }
        })
        
    } 
    useEffect(() =>{
        questionNbr >1 && setPoint(pointPyramid.find(p => p.id === questionNbr-1).point)
      },[questionNbr])

    return (
        <div className="mainQuiz">
            <h1>Quiz</h1>
            <div className="mainQuiz_top">
                <div className="containerTimer">
                    <div className="timer">{timer}</div>
                </div>
                <div className='pyramid'>
                    <ul className='pointList'>
                        {pointPyramid.map((point) => (
                            <li className={questionNbr === point.id ? 'pointRow selected' : 'pointRow'} key={point.id} >
                                <span className='pointRow_id'>{point.id}</span>
                                <span className='pointRow_point'>{point.point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mainQuiz_bottom">
                {stop ? (<h1>{user} avez gagné {point} points</h1>) : 
                (<>
                    <div className='containerQ'>
                        <span>{question?.question}</span>
                    </div>
                    <div className='containerA'>
                        {question?.answer.map((a, index) =>(
                            <li className={selectedAnswer === a ? active : 'answer'} key={index} onClick={() => handleClick(a)}>{a.text}</li>
                        ))}
                    </div>
                </>)}
                
            </div>
        </div>
    );
};

export default Quiz;