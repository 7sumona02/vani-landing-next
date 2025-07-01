import React from 'react'

const Quote = ({ quote, author }: { quote: string, author: string }) => {
  return (
    <div className='text-lg mb-20 space-y-0.5 border-l-2 pl-4 border-[#FF7657]'>
        <div>&quot;{quote}&quot;</div>
        <div className='font-medium'> ― {author}</div>
    </div>
  )
}

export default Quote