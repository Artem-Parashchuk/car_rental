import { ParamsList } from "../ParamsList/ParamsList";
import { FaRegHeart } from "react-icons/fa";
import s from "./CarItem.module.css";
import { Button } from "../Button/Button";

export const CarItem = ({ onOpen, img, make, model, rentalPrice }) => {
  return (
    <li className={s.item}>
      <div className={s.img_block}>
        <img
          src={img}
          alt=""
        />
        <div className={s.heart}>
          <FaRegHeart size={18} />
        </div>
      </div>
      <div className={s.titles_block}>
        <h3>
          {make}
          <span className={s.model}> {model}</span>, 2008
        </h3>
        <p className={s.title_price}>{rentalPrice}</p>
      </div>
      <ParamsList />
      <div className={s.btn_block}>
        <Button
          width={274}
          text={"Learn more"}
          handleClick={onOpen}
        />
      </div>
    </li>
  );
};
