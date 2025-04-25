import { CartProvider } from './contexts/CartProvider'
import './global.css'
import Router from './Routes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename='/mobel'>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}

