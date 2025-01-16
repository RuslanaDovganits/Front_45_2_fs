import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
// import Homework04 from './homeworks/homework04/Homework04.jsx'
// здесь происходит импортирование компонента для дольнейшего использования
// в этом файле мы находим div c id root и render (добавляем) в него код


createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* здесь происходит вызов компонента App с версткой */}
    <App />
   
 
  </StrictMode>,
)
