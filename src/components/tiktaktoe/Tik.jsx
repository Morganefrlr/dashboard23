import { useState } from "react";


const Tik = () => {

    const [turn, setTurn] = useState('Joueur 1: X')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState(true)
    const [cellsWin, setCellsWin] = useState()

    const checkWinner = (squares) =>{
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diag:[
                [0,4,8],
                [6,4,2],
            ]
        }

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
               if(squares[pattern[0]] === '' ||squares[pattern[1]] === '' ||squares[pattern[2]] === ''  ){

               } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]){
                    setCellsWin(pattern)
                    setWinner(squares[pattern[0]])
               }
            })
        }
    }
    const handleClick = (num) =>{
        if(cells[num] !== ''){
            alert('Déjà cliquée')
            return;
        }
        let squares = [...cells]
        if(turn === 'Joueur 1: X'){
            squares[num]='X'
            setTurn('Joueur 2: O')
        }
        if(turn === 'Joueur 2: O'){
            squares[num]='O'
            setTurn('Joueur 1: X')
        }
        checkWinner(squares)
        setCells(squares)
        
    }

    const handleRestart = () =>{
        setWinner(null)
        setCellsWin(null)
        setCells(Array(9).fill(''))
    }

    const Cell = ({num}) =>{
        return <td onClick={() => handleClick(num)} className={cellsWin && cellsWin.includes(num) ? 'win' : '' }>{cells[num]}</td>
    }




    return (
        <div className="mainTik">
            <h1>Tik Tak Toe</h1>
            <span>C'est au tour de {turn}</span>
            <table>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
            </table>
            {winner && (
                <>
                <p className="winner">Félicitation!!! Joueur {winner && winner === 'X' ? '1: X' : '2: O'} a gagné!</p>
                <button className="winnerBtn" onClick={() => handleRestart()}>Jouer encore</button>
                </>
            )}
        </div>
    );
};

export default Tik;