import React, { useState, useEffect } from 'react'

// hooks를 만들게 되면서 다른 점을 살펴보면 좋다!
// initialValue 뿐만 아니라 유효성을 검증하는 기능을 추가했다
// npm 라이브러리에 등록할 때에는 이 부분만 복사해서 vscode 디렉터리에 저장을 한다.
// 단 export const useInput = (initialValue, validator) => { 라고 첫줄에 export 설정
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    const {
      target: { value },
    } = event
    let willUpdate = true
    if (typeof validator === 'function') willUpdate = validator(value)
    if (willUpdate) setValue(value)
  }
  return { value, onChange }
}

const SecondHooks = () => {
  const [item, setItem] = useState(1)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  // 결과값이 true혹은 false가 되도록 유효성을 검증하는 기능을 추가한다
  const maxien = value => value.legnth < 10
  // @를 포함하고 있으면 true를 return하기 때문에 @를 포함하지 않으면 업데이트하도록 = 어떤 종류의 @도 원치 않는다
  // const maxien = value => !value.includes('@')
  const name = useInput('박은정', maxien)

  return (
    <div className='SecondHooks'>
      <h1>Item: {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>

      <h1>useInput</h1>
      <input placeholder='Name' value={name.value} onChange={name.onChange} />
      {/* name 안에 있는 모든 것들을 풀어준다:onpack */}
      {/* 또한 다른 함수에서 이벤트를 처리할 수 있기 때문에 react에서 혁명적이라 할 수 있다
      그래서 우리의 이벤트를 분리한 파일, 다른 entity에 연결해서 처리할 수 있다*/}
      {/* <input placeholder='Name' {...name} /> */}
    </div>
  )
}

export default SecondHooks
