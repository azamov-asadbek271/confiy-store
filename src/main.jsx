import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Store.js'
import { Provider } from 'react-redux'
import { GlobalContextProvider } from './context/useContextGlobal';
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster/>
    <App />
  </Provider>
  // <GlobalContextProvider>
  //   <App/>
  // </GlobalContextProvider>
  // <App/>
);
