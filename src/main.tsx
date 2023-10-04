import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'

//Usamos el Provider para apsar nuestro 'store' a toda la app como un useContext

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
