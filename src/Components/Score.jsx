import React from 'react'

const Score = ({right,wrong}) => {
  return (
    <div className='text-white text-center mt-10'>
      <h1 className='text-4xl mb-10'>Score Board</h1>
      <span className='text-2xl mr-4'>Right Answers : {right}</span>
      <span className='text-2xl mr-4'>Wrong Answers : {wrong}</span>

      <h1 className='text-2xl mr-4 mt-10'>Total Score : {right}</h1>
    </div>
  )
}

export default Score
