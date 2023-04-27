import React from 'react'
import MainStack from './src/navigation/Mainstack'
import { GlobalProvider } from './src/Hooks/GloblaContext'

export default function App() {
  return (
    <GlobalProvider> 
     <MainStack/>
    </GlobalProvider>
  )
}