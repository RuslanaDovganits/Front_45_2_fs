// пример отдельного компонента кнопки 
// экспорт по умолчанию перед обьявлением функции
export default function MyButton({func,text,type = "button"}) {
return <button type ={type}onClick={func}>{text}</button>
}


