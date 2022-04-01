import React, {useState} from 'react'

import Letter from './Letter';

const Board = () => {
  
  return (
    <div className='board'>
      <div className="row">
        <Letter letterPos={0} attemtVal={0} />
        <Letter letterPos={1} attemtVal={0} />
        <Letter letterPos={2} attemtVal={0} />
        <Letter letterPos={3} attemtVal={0} />
        <Letter letterPos={4} attemtVal={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemtVal={1} />
        <Letter letterPos={1} attemtVal={1} />
        <Letter letterPos={2} attemtVal={1} />
        <Letter letterPos={3} attemtVal={1} />
        <Letter letterPos={4} attemtVal={1} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemtVal={2} />
        <Letter letterPos={1} attemtVal={2} />
        <Letter letterPos={2} attemtVal={2} />
        <Letter letterPos={3} attemtVal={2} />
        <Letter letterPos={4} attemtVal={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemtVal={3} />
        <Letter letterPos={1} attemtVal={3} />
        <Letter letterPos={2} attemtVal={3} />
        <Letter letterPos={3} attemtVal={3} />
        <Letter letterPos={4} attemtVal={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemtVal={4} />
        <Letter letterPos={1} attemtVal={4} />
        <Letter letterPos={2} attemtVal={4} />
        <Letter letterPos={3} attemtVal={4} />
        <Letter letterPos={4} attemtVal={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemtVal={5} />
        <Letter letterPos={1} attemtVal={5} />
        <Letter letterPos={2} attemtVal={5} />
        <Letter letterPos={3} attemtVal={5} />
        <Letter letterPos={4} attemtVal={5} />
      </div>
    </div>
    
  ) 
}

export default Board