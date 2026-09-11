import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [Details, setDetails] = useState('')

  const [Task, setTask] = useState([])
  
  const submit_handler=(e)=>{
    e.preventDefault()

    const copyTask=[...Task];

    copyTask.push({Details,title})

    setTask(copyTask)
    
    
    settitle('')
    setDetails('')
    
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
          value={Details}
          onChange={(e)=>{
          setDetails(e.target.value);
            
          }}
        />


        <button
        className=' w-full bg-white text-black px-5 py-2 rounded outline-none font-medium  active:scale-99'>
          Add notes
        </button>
      
      {/* <img className='h-52 ' src="https://freepngimg.com/save/74899-note-notes-paper-sticky-post-it-png-file-hd/1161x1168" alt="" /> */}
      </form>


      <div className=' p-10 bg-gray-800 lg:w-1/2 lg:border-l-3'>
      <h1 className='text-3xl font-bold'>Your notes</h1>
      <div className='flex flex-wrap gap-4 overflow-auto   mt-5 h-full'>
        
        
       {Task.map(function(elem,idx){
        return(
          <div key={idx} className="h-52 w-40 p-4  rounded-2xl bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_c4ZFRcbahuz6SKDufjznet5FczfRyaQAkwJ7Rrcgw&s=10')]">
           <h3 className=' text-black leading-tight font-bold text-xl'>{elem.title}</h3> 
           <h3 className='leading-tight text-xl mt-2 text-gray-500'>{elem.Details}</h3> 
            </div>
        )
        
       })}
      </div>
      </div>
      
    </div>
  )
}

export default App