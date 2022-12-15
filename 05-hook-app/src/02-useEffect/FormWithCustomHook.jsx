import { useState, useEffect } from 'react'

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = formState

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
  }, [password])
  return (
    <>
      <h1>Formulario con custom Hooks</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  )
}
