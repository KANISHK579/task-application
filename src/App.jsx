import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  
  const submit_handler=(e)=>{
    e.preventDefault()
    console.log("form submitted under the name:", title);
    
  }

  
  return (
    <div className='h-screen lg:flex bg-black text-white '>


      <form onSubmit={(e)=>{
        {submit_handler(e)}
      }} className=' flex flex-col lg:w-1/2  items-start gap-2 p-10'>


         <h1 className='text-3xl font-bold'>Your notes</h1>


          <input 
          className='border-2 w-full px-5 py-2 rounded outline-none font-medium'
          type="text" 
          placeholder='Enter heading' 
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
            
            
            
          }}
        />


        <textarea
          className='border-2 w-full px-5 py-2 rounded  h-32 outline-none font-medium'
          type="text" 
          placeholder='Enter Details' 
        />


        <button className=' w-full bg-white text-black px-5 py-2 rounded outline-none font-medium'>Add notes</button>
      
      {/* <img className='h-52 ' src="https://freepngimg.com/save/74899-note-notes-paper-sticky-post-it-png-file-hd/1161x1168" alt="" /> */}
      </form>


      <div className=' p-10 bg-gray-800 lg:w-1/2 lg:border-l-3'>
      <h1 className='text-3xl font-bold'>Your notes</h1>
      <div className='flex flex-wrap gap-4 overflow-auto   mt-5 h-full'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
      </div>
      </div>
      
    </div>
  )
}

export default App