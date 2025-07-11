import React from 'react'

interface ButtonProps {
    buttonTitle: string
    onClick: ()=> void
}

function Button({buttonTitle,onClick}:ButtonProps) {
  return (
    <button onClick={onClick} className='w-[90%] h-10 rounded-xl border-1 border-blue-500'>
        {buttonTitle}
    </button>
  )
}

export default Button