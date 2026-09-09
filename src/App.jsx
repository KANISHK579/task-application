import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <form className=' flex justify-between items-start gap-4 p-10'>
      <div className='flex flex-col items-start w-1/2 gap-5'>
          <input 
          className='border-2 w-full px-5 py-2 rounded outline-none font-medium'
          type="text" 
          placeholder='Enter heading' 
        />
        <textarea
          className='border-2 w-full px-5 py-2 rounded  h-32 outline-none font-medium'
          type="text" 
          placeholder='Enter Details' 
        />
        <button className=' w-full bg-white text-black px-5 py-2 rounded outline-none font-medium'>Add notes</button>
      </div>
      <img className='h-52 ' src="https://freepngimg.com/save/74899-note-notes-paper-sticky-post-it-png-file-hd/1161x1168" alt="" />
      </form>
      
    </div>
  )
}

export default App