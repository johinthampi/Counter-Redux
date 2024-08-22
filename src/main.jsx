import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* to make the store globally accessiable by all component */}
      {/* here  store is the name of store we created inside store.js */}
    <App />
    </Provider>
  </StrictMode>,
)
