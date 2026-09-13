import React from 'react'

const Form = ({submit_handler,Details,title,settitle,setDetails}) => {
  return (
    <div >


      <form onSubmit={(e)=>{
            {submit_handler(e)}
            }} className=' flex flex-col   items-start gap-2 p-10'>


             <h1 className='text-3xl font-bold w-40 line-clamp-4'>Add notes</h1>


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
            className=' w-full bg-white text-black px-5 py-2 rounded outline-none font-medium  active:scale-99 cursor-pointer '>
            Add notes
            </button>
      
        </form>
    </div>
    
  )
}

export default Form