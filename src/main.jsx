import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { store } from "./app/store";
// import { Provider } from 'react-redux'
import { GlobalContextProvider } from './context/useContextGlobal';

ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
  <GlobalContextProvider>
    <App/>
  </GlobalContextProvider>
//   <App/>
);
