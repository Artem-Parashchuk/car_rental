import { useState } from "react"
import s from './Catalog.module.css'
import { CarList } from "../../components/CarList/CarList"


export const Catalog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>

        <CarList />
    </div>
  )
}
