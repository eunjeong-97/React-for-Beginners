import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CoinTracker = () => {
  const [coinList, setCoinList] = useState([])
  const [coinNameList, setCoinNameList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState(coinNameList)
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
  const [inputCoinData, setInputCoinData] = useState({})
  const [calculateInput, setCalculateInput] = useState(0)

  const getCoinData = async () => {
    const json = await axios('https://api.coinpaprika.com/v1/tickers')
    setCoinList(json.data)
  }

  const changeInputValue = event => {
    setInputValue(event.target.value)
    setIsHaveInputValue(true)
  }

  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false)
      setDropDownList([])
    } else {
      setDropDownList(
        coinNameList.filter(coinNameItem => coinNameItem.includes(inputValue))
      )
    }
  }

  const clickDropDownItem = clickedItem => {
    setInputValue(clickedItem)
    setIsHaveInputValue(false)
  }

  const handleDropDownKey = event => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === 'ArrowDown' &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1)
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1)
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex])
        setDropDownItemIndex(-1)
      }
    }
  }

  const changeCalculateInput = event => {
    setCalculateInput(event.target.value)
  }

  // coinData 가져오기
  useEffect(() => getCoinData(), [])

  // coinNameList
  useEffect(() => {
    setCoinNameList(coinList.map(coinItem => coinItem.name))
  }, [coinList])

  // dropDownList
  useEffect(showDropDownList, [coinNameList, inputValue])

  // inputCoinData
  useEffect(() => {
    setInputCoinData(coinList[coinNameList.indexOf(inputValue)])
  }, [coinList, coinNameList, inputValue])

  return (
    <MainBox>
      <Title>Coin Tracker</Title>
      {coinList !== undefined && (
        <InputBox isHaveInputValue={isHaveInputValue}>
          <Input
            type='text'
            value={inputValue}
            onChange={changeInputValue}
            onKeyUp={handleDropDownKey}
          />
          <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
        </InputBox>
      )}
      {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 코인종류가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? 'selected' : ''
                }
              >
                {dropDownItem}
              </DropDownItem>
            )
          })}
        </DropDownBox>
      )}
      {inputValue !== '' && !isHaveInputValue && inputCoinData !== undefined && (
        <>
          <Title>코인 계산기 맞나..</Title>
          <InputBox>
            <Input
              type='number'
              placeholder='거래하실 미국달러를 입력해주세요...'
              value={calculateInput}
              onChange={changeCalculateInput}
            />
            <DeleteButton onClick={() => setCalculateInput(0)}>
              &times;
            </DeleteButton>
          </InputBox>

          {calculateInput > 0 && (
            <p>
              {calculateInput} USD ={' '}
              {Math.round(calculateInput / inputCoinData.quotes.USD.price)}{' '}
              {inputCoinData.name}
            </p>
          )}
        </>
      )}
    </MainBox>
  )
}

const activeBorderRadius = '5px 5px 0 0'
const inactiveBorderRadius = '5px 5px 5px 5px'

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
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;
`

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const DeleteButton = styled.div`
  cursor: pointer;
`

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`

const DropDownItem = styled.li`
  padding: 0 16px;
  &.selected {
    background-color: lightgray;
  }
`

export default CoinTracker
