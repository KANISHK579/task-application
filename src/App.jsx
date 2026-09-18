import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Notes from './components/Notes'
import Form from './components/Form'

const App = () => {
  const [Task, setTask] = useState(()=>{
    const localdata =localStorage.getItem('Stored_notes')

    return localdata? JSON.parse(localdata) :[];
  });


  useEffect(() => {
    localStorage.setItem('Stored_notes',JSON.stringify(Task))
  
  }, [Task])


  
  
  const [title, settitle] = useState('')
  const [Details, setDetails] = useState('')

  
  
  const submit_handler=(e)=>{
    e.preventDefault()

    const copyTask=[...Task];

    copyTask.push({Details,title})

    setTask(copyTask)
    
    
    settitle('')
    setDetails('')
    
  }
  const noteDeleted=(idx)=>{
    const copyTask=[...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
  }

  
  return (
    <div className='h-screen lg:flex max-sm:flex max-sm:flex-col  bg-black text-white justify-between  ' >
      <Form  title={title}
        settitle={settitle}
        Details={Details}
        setDetails={setDetails}
        submit_handler={submit_handler} />

      <Notes  Task={Task}
        noteDeleted={noteDeleted} />
      
    </div>
  )
}

export default App