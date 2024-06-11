import { TagsList } from "../TagsList/TagsList";
import { FaRegHeart } from "react-icons/fa";
import s from "./CarItem.module.css";
export const CarItem = () => {

  return (
    <li className={s.item}>
      <div className={s.img_block}>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds"
          alt=""
        />
        <div className={s.heart}>
        <FaRegHeart size={18} />
        </div>
      </div>
      <div className={s.titles_block}>
        <h3>
          Buick
          <span className={s.model}> Enclave</span>, 2008
        </h3>
        <p className={s.title_price}>$40</p>
      </div>
      <TagsList />
      <button className={s.btn}>Learn more</button>
    </li>
  );
};
