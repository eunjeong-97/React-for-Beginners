import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavBox>
      <Title>
        <Link to='/'>React for Beginners</Link>
      </Title>
      <MenuBox>
        <MenuItem>
          <Link to='/todolist'>To Do List</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/coin'>CoinTracker</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/movie'>Movie</Link>
        </MenuItem>
      </MenuBox>
    </NavBox>
  )
}

const NavBox = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #b075c9;
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const Title = styled.div``

const MenuBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px;
`

export default Nav
