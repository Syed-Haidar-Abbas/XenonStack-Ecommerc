import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
   <footer style={{textAlign:'center'}}>{`Copyright © Syed Haidar Abbas ${year}`}</footer>
  )
}

export default Footer