import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import product provider
import ProductProvider from './contexts/ProductContext'
//import sidebar provider
import SidebarProvider from './contexts/SidebarContext'
//import cart provider
import CartProvider from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
 
);
