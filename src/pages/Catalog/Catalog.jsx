import s from "./Catalog.module.css";
import { CarList } from "../../components/CarList/CarList";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/slice";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/operations";
import { Loader } from "../../components/Loader/Loader";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <SearchForm />
      {isLoading ? <Loader /> : <CarList cars={cars} />}
    </div>
  );
};
