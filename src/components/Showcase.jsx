import React, { Component } from 'react'
const handleHover = () => {
  console.log(new Date().getFullYear());
}
export class showcase extends Component {
  render() {
    return (
      <>
      <h1>
        <button type='submit' onMouseHover={handleHover}> submit</button>
        Hi, i am Mahmud Bello</h1>
      
      </>
    )
  }
}

export default showcase