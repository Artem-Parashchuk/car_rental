import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
        <NavLink to='/favorites'>Favorite</NavLink>
    </nav>
  )
}
