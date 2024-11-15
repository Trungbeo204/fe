import React from 'react'

const DashboardHomeBox = (props) => {
    const {icon, text, count, bgColor} = props
  return (
    <div className={`${bgColor} p-4 flex flex-col items-center justify-center aspect-square rounded-lg w-40`}>
        <p className='text-4xl'> {icon}</p>
          <p className='pt-2 font-mono text-lg'>{text}</p>
          <p className='pt-2 font-mono'>{count}</p>
          
        </div>
  )
}

export default DashboardHomeBox