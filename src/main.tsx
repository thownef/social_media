import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '@/shared/store/index.ts'
import "@/styles/globals.css";
import { GlobalHistory } from '@/shared/components/GlobalHistory/GlobalHistory.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalHistory />
      <App />
    </Provider>
  </React.StrictMode>,
)
