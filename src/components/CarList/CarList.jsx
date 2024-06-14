import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations";
import { selectIsError, selectIsLoading } from "../../redux/slice";
import { CarItem } from "../CarItem/CarItem";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Loader } from "../Loader/Loader";
import s from "./CarList.module.css";

export const CarList = ({ cars = [] }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpenModal = (car) => {
    setSelectedCar(car);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedCar(null);
  };

  const handleLoadMore = () => {
    dispatch(fetchCarsThunk());
  };

  return (
    <>
      <ul className={s.list}>
        {cars.map((item) => (
          <CarItem
            onOpen={() => handleOpenModal(item)}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
      {isOpenModal && (
        <ModalWindow onClose={handleCloseModal} car={selectedCar} />
      )}

      <button
        className={s.btn_load_more}
        onClick={handleLoadMore}
      >
         Load more
      </button>
    </>
  );
};
