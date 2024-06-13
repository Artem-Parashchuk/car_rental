import s from "./Catalog.module.css";
import { CarList } from "../../components/CarList/CarList";
import { SearchForm } from "../../components/SearchForm/SearchForm";

export const Catalog = () => {
  return (
    <div className={s.container}>
      <SearchForm />
      <CarList />
    </div>
  );
};
