import React from 'react'

const Button = ({styles , text} : {styles : string , text : string}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
     ${styles} font-poppins font-medium text-[18px] text-primary outline-none`}>
        {text}
    </button>
  )
}

export default Button