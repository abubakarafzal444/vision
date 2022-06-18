import React from 'react'

const Backdrop = ({className,onConfirm}) => {
  return (
    <div className={className} onClick={onConfirm}></div>
  )
}

export default Backdrop