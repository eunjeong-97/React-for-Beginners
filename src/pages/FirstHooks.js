import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue)
  const onChange = event => {
    const {
      target: { value },
    } = event
    setValue(value)
  }

  return { value, onChange }
}

const useFetch = url => {
  const [payload, setPayload] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const callUrl = async url => {
    try {
      // Axios는 response 안에 다른 것들과 함께 API응답을 데이터로 준다.
      const { data } = await axios.get(url)
      setPayload(data)
    } catch {
      setError('Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    callUrl(url)
  }, [url])

  return { payload, loading, error }
}

const FirstHooks = () => {
  const name = useInput('')
  const { payload, loading, error } = useFetch(
    'https://api.thedogapi.com/v1/images/search'
  )
  return (
    <div className='Hooks'>
      <h1>Use Input</h1>
      <input {...name} placeholder="what's your name" />
      {/* <input value={name.value} onChange={name.onChange} placeholder="what's your name" /> */}
      <p>Value: {name.value}</p>

      <h1>use Fetch</h1>
      {loading && <span>Loading your dog</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload[0].url} width='250' />}
    </div>
  )
}

export default FirstHooks
