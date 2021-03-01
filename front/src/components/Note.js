import React from 'react'

const Address = ({ address }) => {

  return (
    <li className='address'>
      {address.content}
    </li>
  )
}

export default Address