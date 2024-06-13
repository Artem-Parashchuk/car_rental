import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#0b44cd"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
