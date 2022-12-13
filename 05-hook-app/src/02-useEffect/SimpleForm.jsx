import { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@gmail.com',
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
    // console.log('SE LLAMO EL USEEFFECT')
  }, [])

  useEffect(() => {
    // console.log('formState CAMBIO')
  }, [formState])

  useEffect(() => {
    // console.log('email CAMBIO')
  }, [email])
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'strider2' && <Message />}
    </>
  )
}
