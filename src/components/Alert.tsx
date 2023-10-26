import React from 'react'
interface PropsAlert
{
  alert: string;
  children: React.ReactNode;
}
const Alert = ({alert, children}:PropsAlert) => {
  return (
    <div className='alert alert-primary'>{alert} <br /> {children}</div>
  )
}

export default Alert