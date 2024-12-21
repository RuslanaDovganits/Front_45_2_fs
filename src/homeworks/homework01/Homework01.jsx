import './Homework01.css'
import img from '../../assets/images/IMG_2035.jpeg'
function Homework01() {
    return(
        <div className="profile-card">
<img src={img} alt="Фото профиля"  className='profile-avatar'/>

<h2 className="profile-name">Тигр Тигровский</h2>
<p className="profile-bio">
	<p>1.	Гурман на пенсии: Мастер поедания всего съедобного и несъедобного, особенно если это из миски хозяйки.</p>
	<p>2.	Будильник с пушистым механизмом: Просыпается с первыми лучами солнца, ведь желудок требует своего!</p>
	<p>3.	Профессиональный дрематель: Спит так много, что даже ленивец завидует его графику.</p>
	<p>4.	Теневой страж: Следит за каждым шагом хозяйки, чтобы не пропустить момент, когда она идет к холодильнику.</p>
	<p>5.	Мастер йоги: Растягивается на весь диван, показывая, как правильно занимать пространство.</p>
	<p>6.	Кулинарный критик: Всегда готов попробовать то, что ест хозяйка, и выразить свое “мяу” одобрения.</p>
	<p>7.	Ночной исследователь: Активизируется после полуночи, проверяя прочность мебели и нервов хозяйки.</p>
	<p>8.	Пушистый психолог: Слушает все секреты хозяйки, мурлыкая в ответ свои мудрые советы.</p>
	<p>9.	Хранитель коробок: Не упустит ни одной возможности занять новую коробку, даже если она меньше его самого.</p>
	<p>10.	Завтрак-менеджер: Будит хозяйку рано утром, напоминая, что завтрак — самое важное (для него) время дня.</p>

￼</p>


        </div>
    )
}
export default Homework01;