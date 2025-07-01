import React from 'react'

const InfoHeader = ({ imgUrl, author, date, time }: { imgUrl: string, author: string, date: string, time: number }) => {
  return (
    <div className='flex gap-8 text-sm'>
        <div className='flex items-center gap-2'>
            <div>
                <img src={imgUrl} className='size-7 rounded-full' alt='profile' />
            </div>
            <div className='text-black/60 font-medium'>{author}</div>
        </div>
        <div className='flex items-center gap-2 text-black/60'>
            <div>{date}</div>
            <span>|</span>
            <div>{time} min read</div>
        </div>
    </div>
  )
}

export default InfoHeader