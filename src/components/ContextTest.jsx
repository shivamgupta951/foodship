import React, { useContext } from 'react'
import { BioContext } from '../ContextApi/text'

const ContextTest = () => {
    const {myName , mySurname , value} = useContext(BioContext);
  return (
    <h1>
      My Name is {myName} and Surname is {mySurname} and the value is {value}
    </h1>
  )
}

export default ContextTest
