"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e)=>{
     e.preventDefault();
     settask([...task , {title, desc}]);
     settitle("");
     setdesc("");
  }

  const deleteHandler = (i)=>{
    let copytask = [...task];
    copytask.splice(i,1);
    settask(copytask);
  }

  let renderTask = <h1 className='px-5 py-2 text-3xl font-semibold text-white'>No Task Yet</h1>;
  if(task.length>0){
    renderTask = task.map(function(t,i){
      return(
    <li key = {i} className='flex justify-between px-4'>
          <div className='flex justify-between px-4 w-2/3 items-center'>
        <h1>{t.title}</h1>
        <h1>{t.desc}</h1>
       
     </div>
     <button onClick={()=>{
      deleteHandler(i)
     }} className='bg-red-600 rounded-md px-5 py-2  text-xl font-bold text-white mb-5' type='submit'>Delete</button>
    </li>
      )
     })
  }


  return (
    <>
    <h1 className='bg-black text-center text-white text-5xl font-bold'>To Do List</h1>
    <form onSubmit={submitHandler}>
      <input className='px-5 py-2 mt-5 rounded-md bg-zinc-600 ml-2 w-72 outline-none' type='text' placeholder='Add Your Title' value={title} onChange={(e)=>{
        settitle(e.target.value);
      }}></input>
      <br/>
      <input className='px-5 py-2 mt-5 rounded-md bg-zinc-600 ml-2 w-72 outline-none' type='text' placeholder='Add Your Description' value={desc} onChange={(e)=>{
        setdesc(e.target.value);
      }}></input>
      <br/>
      <button className='bg-green-600 rounded-md px-5 py-2 ml-2 mt-5 text-xl font-bold text-white' type='submit'>Add Task</button>
    </form>
    <div className=' bg-zinc-800 p-5 mt-5 text-white'>
      <ul>
      {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page