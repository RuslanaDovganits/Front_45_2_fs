import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// импорт css из отдельного файла
import './index.css'
import App from './App.jsx' 
// здесь происходит импортирование компонента для дольнейшего использования
// в этом файле мы находим div c id root и render (добавляем) в него код
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* здесь происходит вызов компонента App с версткой */}
    <App />
  </StrictMode>,
)
