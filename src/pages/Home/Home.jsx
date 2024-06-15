import s from "./Home.module.css";
export const Home = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to Car Rental Service</h1>
        <p className={s.text}>
          We offer a variety of cars for rent. <br /> Choose your perfect car and enjoy
          your ride!
        </p>
      </div>
    </section>
  );
};
