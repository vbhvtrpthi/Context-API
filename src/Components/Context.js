//This file is acting as a global store and any component needing props will have to access it
import React from 'react'
const context = React.createContext('hello')
console.log(context);
export default context