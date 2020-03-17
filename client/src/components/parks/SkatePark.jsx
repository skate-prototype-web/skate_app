import React from 'react'

const SkatePark = props => {
  const {website, phone, key, name} = props;
  return (
    <div> {name} {phone} </div>
  )
}

export default SkatePark;