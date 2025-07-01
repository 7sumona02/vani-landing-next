import React from 'react'
import { Badge } from '../ui/badge'

const Tag = ({ tag }: { tag: string }) => {
  return (
    <Badge className='text-black bg-white rounded-sm border border-[#66666633] px-6 py-1 text-sm'>{tag}</Badge>
  )
}

export default Tag