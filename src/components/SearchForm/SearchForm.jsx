import { Formik, Form, Field } from "formik";
import s from "./SearchForm.module.css";
import { Button } from "../Button/Button";
import Select from "react-select";
import {
  brandOptions,
  customStyles,
  priceOptions,
} from "../../helpers/selectCars";
export const SearchForm = () => {
  const initialValues = {
    brand: "",
    price: "",
    mileage: "",
    min_mileage: "",
    max_mileage: "",
  };
  const handleSubmit = (values, option) => {
    option.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label_brand}>
            <span className={s.label_text}>Car brand</span>

            <Select
              options={brandOptions}
              placeholder="Enter the text"
              styles={customStyles}
            />
          </label>

          <label className={s.label_price}>
            <span className={s.label_text}>Price / 1 hour</span>
            <Select
              options={priceOptions}
              placeholder="To $"
              styles={customStyles}
            />
          </label>

          <div className={s.block_mileage}>
            <label className={s.label}>
              <span className={s.label_text}>Сar mileage / km</span>
              <Field
                name="min_mileage"
                className={s.input_mileage_left}
                placeholder="From"
              />
            </label>
            <label className={s.label}>
              <Field
                name="max_mileage"
                className={s.input_mileage_right}
                placeholder="To"
              />
            </label>
          </div>

          <Button
            width={136}
            text="Search"
            height={48}
            padding={14}
          />
        </Form>
      </Formik>
    </div>
  );
};
