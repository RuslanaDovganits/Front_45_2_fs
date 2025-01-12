import MyButton from "../myButtons/MyButton";

// за место props придет обьект с переданными родительскими данными
// по соответсвующим ключам
function UserCard({name,age, lastname}) {
    
    // функция обработчик
    const handleClick = () => {
alert(`Hello, ${name}!`)
    }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age} </p>
      <p>Lastname: {lastname}</p>
      <MyButton func={handleClick} text={`Choose ${name} ${lastname}!`}/>
    </div>
  );
}
export default UserCard;
