"use client"
import React, {useState} from 'react'

const page = () => {
  const [task, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
      if (task.trim() === '' || desc.trim() === '') {
      alert('Please enter a task and description as well');
    } else {
      setMainTask([...mainTask, { task, desc }]);
    }
      setTitle('');
    setDesc('');
  }
  
  
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)

  }

  let renderTask= <h2>No task available</h2>
  if (mainTask.length>0){
  renderTask=mainTask.map((t, i)=>{
    return (<li key={i} className='flex items-center justify-between mb-8'>
       <div className='flex justify-between mb-5 w-2/3'>
      <input type='checkbox'className='w-6 h-6'></input>
      <div className='flex flex-col align-middle mr-20 w-2/3'>
      <h4 className='text-3xl font-semibold'>{t.task}</h4>
      <h5 className='text-xl font-medium'>{t.desc}</h5>
      </div>
    </div>
    <button
    onClick={()=>
      {deleteHandler(i)}}
    className='bg-red-500 rounded text-white px-4 py-2 font-bold'>
      Delete
    </button> 
    </li>
    )
  })
}



  return (
      <>
      
        <h1 className='bg-black text-white p-5 text-5xl text-center font-bold font-sans'>My To-Do List</h1>
        <div className='bg-slate-400 h-3/6 flex flex-row' >
            <input type="text" className='text-2xl border-zinc-400 p-5 m-5 rounded basis-1/2' placeholder='Enter your tasks' 
            value={task}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}></input>
            <input type="text" className='text-2xl border-zinc-400 p-5 m-5 rounded basis-1/2' placeholder='Enter Description'
            value={desc}
            onChange={(e)=>{
              setDesc(e.target.value)
            }}></input>
            <div>
            
            <button className='bg-black text-white p-2 m-1 rounded w-60 mt-9' onClick={submitHandler}>Add Task</button>
            </div>
            
        </div>
        <hr/>
        <div className='m-10 p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
        </div>
      </>
  )
}

export default page
