const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
  
}

const Title = ({text, type}) => {
  return(
    <>
      {console.log(type)}
    </>
  )
}

export default Button