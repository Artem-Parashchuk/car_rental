import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header_wrap}>
        <header className={s.header}>
          <h2 className={s.title}>Car Rental</h2>
          <Navigation />
        </header>
      </div>
      <main>
        <div className={s.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
