import React from 'react'

const NoteCard = (idx,elem,noteDeleted) => {
  return (
     <div key={idx} className="relative flex flex-col  justify-between h-52 w-40 p-4  rounded-2xl bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_c4ZFRcbahuz6SKDufjznet5FczfRyaQAkwJ7Rrcgw&s=10')]">
          <div className='min-w-0' >
          
              <p
                className=' h-auto text-black leading-tight font-bold text-lg  truncate '>{elem.title}</p>
         
           
            <p 
              className=' w-full h-auto mt-1  leading-tight text-xl  text-gray-500 line-clamp-5 wrap-break-word'> 
            {elem.Details}
            </p> 
         
          </div> 
          <button onClick={()=>{
            noteDeleted(idx)
          }}  className='hover:bg-red-600 cursor-pointer active:scale-95 rounded-full p-1 bg-red-400 text-xs font-bold mt-1'>Delete</button>
          </div>
  )
}

export default NoteCard