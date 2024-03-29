import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/header'
import Busca from './Components/Corpo/busca'
import Corpo from './Components/Corpo/Corpo'
import Tresprodutos from './Components/Corpo/tresprodutos'
import Testegratis from './Components/Corpo/testegratis'
import Grupo from './Components/Grupo/grupo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <main>
      <Busca/>
      <Corpo/>
      <Tresprodutos/>
      <Testegratis/>
      <Grupo/>
    </main>
  </React.StrictMode>,
)
