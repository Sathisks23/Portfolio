import React from 'react'

const Blogpost = ({params}) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default Blogpost
