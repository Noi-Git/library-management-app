import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Home from '../pages/Home'

test('Home page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
  const title = screen.getByText(/latest products/i)
  expect(title).toBeInTheDocument()
})
