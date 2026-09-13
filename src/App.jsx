import React, { useState } from 'react'
import { X } from 'lucide-react'
import Notes from './components/Notes'
import Form from './components/Form'

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
  const noteDeleted=(idx)=>{
    const copyTask=[...Task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
  }

  
  return (
    <div>
      <Form  title={title}
        settitle={settitle}
        Details={Details}
        setDetails={setDetails}
        submitHandler={submit_handler} />

      <Notes   Task={Task}
        noteDeleted={noteDeleted} />
      
    </div>
  )
}

export default App