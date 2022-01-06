import './style.css'

const InputField = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a Todo' className='input__box' />
      <button type='submit' className='input__submit'>
        GO
      </button>
    </form>
  )
}

export default InputField
