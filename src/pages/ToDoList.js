import React, { useState } from 'react'
import styled from 'styled-components'

const ToDoList = () => {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState([])

  const inputOnChange = event => {
    setToDo(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    setToDoList(currentArray => [...currentArray, toDo])
    setToDo('')
  }

  const deleteToDo = event => {
    const deleteValue = event.target.previousElementSibling.innerText
    setToDoList(toDoList.filter(item => item !== deleteValue))
  }
  return (
    <div className='ToDoList'>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          placeholder='To Do 목록을 적어주세요'
          onChange={inputOnChange}
        />
      </form>
      <ul>
        {toDoList.map((toDoItem, toDoIndex) => (
          <li key={toDoIndex}>
            <span>{toDoItem}</span>
            <span onClick={deleteToDo}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
