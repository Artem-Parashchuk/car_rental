import { useEffect } from "react";
import s from "./ModalWindow.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { ParamsList } from "../ParamsList/ParamsList";
export const ModalWindow = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={s.modal}
      onClick={handleClickOutside}
    >
      <div className={s.modal_content}>
        <button
          className={s.close}
          onClick={onClose}
        >
          <IoCloseOutline size={24} />
        </button>
        <div className={s.img_block}>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds"
            alt=""
          />
        </div>
        <div className={s.title_block}>
          <h2 className={s.title}>
            Buick <span className={s.model}> Enclave</span>,
            <span className={s.year}>2008</span>
          </h2>
        </div>
        <div className={s.tag_block}>
          <ParamsList />
        </div>

        <p className={s.description_text}>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </p>
        <div className={s.functional_block}>
          <h3 className={s.functional_title}>
            Accessories and functionalities:
          </h3>
          <ParamsList />
        </div>
        <div className={s.rental_block}>
          <h3 className={s.rental_title}>Rental Conditions: </h3>
          <ul className={s.rental_list}>
            <li className={s.rental_item}>
              Minimum age: <span>25</span>
            </li>
            <li className={s.rental_item}>Valid driver’s license</li>
            <li className={s.rental_item}>Security deposite required </li>
            <li className={s.rental_item}>
              Mileage: <span>5,858</span>
            </li>
            <li className={s.rental_item}>
              Price: <span>40$</span>
            </li>
          </ul>
        </div>
        <div className={s.link_block}>
          <a
            href="tel:+380730000000"
            className={s.link}
          >
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
};
