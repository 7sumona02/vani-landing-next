import React from 'react'

const Quote = ({ quote, author, className }: { quote: string, author?: string, className?: string }) => {
  return (
    <div className={`${className} text-lg space-y-0.5 border-l-2 pl-4 border-[#FF7657]`}>
        <div>&quot;{quote}&quot;</div>
        <div className='font-medium'>{author}</div>
    </div>
  )
}

export default Quote