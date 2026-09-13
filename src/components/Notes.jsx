import React from 'react'
import NoteCard from './utility/NoteCard'

const Notes = ({Task,noteDeleted}) => {
  return (
     <div className=' p-10 bg-gray-800 lg:w-1/2 lg:border-l-3'>
      <h1 className='text-3xl font-bold'>Your notes</h1>
      <div className='flex flex-wrap gap-4 overflow-auto   mt-5 h-full'>
        
        
       {Task.map(function(elem,idx){
        return(
        <NoteCard key={idx}
            elem={elem}
            idx={idx}
            noteDeleted={noteDeleted} />
        )
        
       })}
      </div>
      </div>
  )
}

export default Notes