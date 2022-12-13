export const SimpleForm = () => {
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />

      <input
        type="email"
        className="form-control"
        placeholder="Fernando@google.com"
        name="email"
      />
    </>
  )
}
