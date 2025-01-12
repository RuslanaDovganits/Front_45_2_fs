import { useState } from "react";
import MyButton from "../myButtons/MyButton";
import style from './feedback.module.css'
export default function Feedback() {
  const [count1, setCount] = useState(0);

  const handleLike = () => {
    setCount((count) => count + 1);
  };

  const [count2, setCount2] = useState(0);

  const handleDislike = () => {
    setCount2((count2) => count2 + 1);
  };

  const handleReset = () => {
    setCount(0),setCount2(0)
  }



  return (
    <div className={style.feedbackContainer}>
      <MyButton func={handleLike} type="button" text="Like 👍" />
      <span>{count1}</span>
      <MyButton func={handleDislike} type="button" text="Dislike 👎" />
      <span>{count2}</span>
      <MyButton func={handleReset} type="reset" text="reset" />
    </div>
  );
}
