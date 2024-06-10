import { Outlet } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation'
import s from './Layout.module.css'


export const Layout = () => {
  return (
    <div className={s.wrapper}>
        <header className={s.header}>
            <h2 className={s.title}>Car rental</h2>
            <Navigation />
        </header>
        <main>
            <div>
                <Outlet />
            </div>
        </main>
    </div>
  )
}
