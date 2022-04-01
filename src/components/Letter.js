import React, { useContext } from 'react'
import { AppContext } from '../App'

function Letter ({letterPos, attemtVal}) {
    
    const { board, correctWord, currAttempt } = useContext(AppContext);
     
    const letter = board[attemtVal][letterPos]

    

    const correct = correctWord[letterPos] === letter;
    console.log( correct)
    const almost = !correct && letter !== "" && correctWord.includes(letter)

    const letterState = currAttempt.attempt > attemtVal && (correct ? "correct" : almost ? "almost" : "error")

    return <div className='letter' id={letterState}>{letter}</div>

}

export default Letter