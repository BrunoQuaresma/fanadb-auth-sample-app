import React from 'react'
import { Router } from '@reach/router'
import SignInPage from './SignInPage'
import NotesPage from './NotesPage'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <SignInPage path="/"></SignInPage>
      <NotesPage path="/notes"></NotesPage>
    </Router>
  )
}

export default App
