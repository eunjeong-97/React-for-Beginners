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
    <MainBox>
      <Title>To Do List</Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={toDo}
          placeholder='To Do 목록을 적어주세요'
          onChange={inputOnChange}
        />
      </Form>
      <ListBox>
        {toDoList.map((toDoItem, toDoIndex) => (
          <ListItem key={toDoIndex}>
            <ToDoValue>{toDoItem}</ToDoValue>
            <Delete onClick={deleteToDo}>❌</Delete>
          </ListItem>
        ))}
      </ListBox>
    </MainBox>
  )
}

const MainBox = styled.div`
  width: 60%;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  background-color: #f3e7f6;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const Form = styled.form``

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  margin: 10px 0;
`

const ListBox = styled.ul``

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  position: relative;
  width: 50%;
`

const ToDoValue = styled.span``

const Delete = styled.div`
  display: inline-block;
  margin-left: 10px;
  position: absolute;
  right: 10px;
  cursor: pointer;
`

export default ToDoList
