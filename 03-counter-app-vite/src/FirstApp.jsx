import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Anthony',
  subTitle: 'No hay subtitulo',
  // title: 'No hay titulo',
}
