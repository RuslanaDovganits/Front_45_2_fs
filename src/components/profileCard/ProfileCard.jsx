import style from './profileCard.module.css'

export default function ProfileCard() {
  const profileCard = {
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/028/216/746/small_2x/night-vision-sniper-on-rooftop-futuristic-warfare-game-illustration-with-shooting-character-ai-generated-photo.jpg",
    myName: "John Doe",
    job: "sniper",
    hobby: "hunting humans",
  };

  return (
    <div className={style.div_container}>
      <img src={profileCard.avatar} alt="" />
      <p>Name: {profileCard.myName}</p>
      <p>Job: {profileCard.job}</p>
      <p>Hobby: {profileCard.hobby}</p>
    </div>
  );
}
