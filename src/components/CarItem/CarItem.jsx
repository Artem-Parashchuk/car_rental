import { ParamsList } from "../ParamsList/ParamsList";
import { FaRegHeart } from "react-icons/fa";
import s from "./CarItem.module.css";
import { Button } from "../Button/Button";

export const CarItem = ({
  onOpen,
  img,
  make,
  model,
  rentalPrice,
  year,
  address,
  rentalCompany,
  type,
  id,
  accessories
}) => {
  const getCityAndCountry = (address) => {
    if (!address) return { city: "Unknown City", country: "Unknown Country" };
    const parts = address.split(", ");
    const city = parts[parts.length - 2]?.trim() || "Unknown City";
    const country = parts[parts.length - 1]?.trim() || "Unknown Country";
    return { city, country };
  };

  const { city, country } = getCityAndCountry(address);

  return (
    <>
      <li className={s.item}>
        <div className={s.img_block}>
          <img
            src={img}
            alt={`${make} ${model}`}
          />
          <button className={s.heart}>
            <FaRegHeart size={18} />
          </button>
        </div>
        <div className={s.titles_block}>
          <h3>
            {make}
            <span className={s.model}> {model}</span>, {year}
          </h3>
          <p className={s.title_price}>{rentalPrice}</p>
        </div>
        <div className={s.tags_block}>
        <ul className={s.tag_list}>
          <li className={s.tag_item}>{city}</li>
          <li className={s.tag_item}>{country}</li>
          <li className={s.tag_item}>{rentalCompany}</li>
        </ul>
        <ul className={s.tag_list}>
          <li className={s.tag_item}>{type}</li>
          <li className={s.tag_item}>{model}</li>
          <li className={s.tag_item}>{id}</li>
          <li className={s.tag_item}>{accessories[0].slice(0, 15)}</li>
        </ul>
        </div>
        <div className={s.btn_block}>
          <Button
            width={274}
            text={"Learn more"}
            handleClick={onOpen}
          />
        </div>
      </li>
    </>
  );
};
