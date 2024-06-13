import { Loader } from "../../components/Loader/Loader";
import s from "./Home.module.css";
export const Home = () => {
  return (
    <div className={s.container}>
      <Loader />
    </div>
  );
};
