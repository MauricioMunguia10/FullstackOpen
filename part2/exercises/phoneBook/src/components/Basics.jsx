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
      {
        type === 'h1' ? (
          <h1>{text}</h1>
        ) : type === 'h2' ? (
          <h2>{text}</h2>
        ) : (
          <p>{text}</p>
        )
      }
    </>
  )
}

export {Button, Title}