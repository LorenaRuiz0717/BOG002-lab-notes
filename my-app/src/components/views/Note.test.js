import { render,screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import React from 'react'
import { createMemoryHistory } from 'history'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import Notes from './Notes'
// import { isToastIdValid } from 'react-toastify/dist/utils'

test('renderizando notes', () => {
   const history= createMemoryHistory()
   render(
       <Router history ={history}>
           <Notes/>
       </Router>
   )
  expect(screen.getByText(/Notes/i)).toBeInTheDocument()
})