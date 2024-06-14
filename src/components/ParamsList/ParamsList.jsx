import s from "./ParamsList.module.css";





export const ParamsList = ({ params }) => {

  const createArray = (arr) => {
    
  }


  return (
    <ul className={s.list}>
      {params.map((param, index) => (
        <li key={index} className={s.item}>
          {param}
        </li>
      ))}
    </ul>
  );
};

















// export const ParamsList = ({
//   address,
//   id,
//   year,
//   type,
//   fuelConsumption,
//   engineSize,
// }) => {
//   const getCityAndCountry = (address) => {
//     if (!address) return { city: "Unknown City", country: "Unknown Country" };
//     const parts = address.split(', ');
//     const city = parts[parts.length - 2]?.trim() || "Unknown City";
//     const country = parts[parts.length - 1]?.trim() || "Unknown Country";
//     return { city, country };
//   };


//   const { city, country } = getCityAndCountry(address);
//   return (
//     <ul className={s.list}>
//       <li className={s.item}>{city}</li>
//       <li className={s.item}>{country}</li>
//       <li className={s.item}>Id: {id}</li>
//       <li className={s.item}>Year: {year}</li>
//       <li className={s.item}>Type: {type}</li>
//       <li className={s.item}>Fuel Consumption: {fuelConsumption}</li>
//       <li className={s.item}>Engine Size: {engineSize}</li>
//     </ul>
//   );
// };



















