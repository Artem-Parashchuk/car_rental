import { useState } from "react";
import { CarItem } from "../CarItem/CarItem";
import s from "./CarList.module.css";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import data from "../../assets/data.json";

export const CarList = () => {
  const [cars, setCars] = useState(data);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <ul className={s.list}>
        {cars.map((item) => {
          return (
            <CarItem
              onOpen={handleOpenModal}
              key={item.id}
              {...item}
            />
          );
        })}
      </ul>
      {isOpenModal && <ModalWindow onClose={handleCloseModal} />}

      <button className={s.btn_load_more}>Load more</button>
    </>
  );
};
