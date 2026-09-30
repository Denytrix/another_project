import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/reservations', 'Reservations'], ['/gallery', 'Gallery'], ['/contact', 'Contact']]
  return <header className="site-header"><Link className="brand" to="/">SAVOR<span>&</span>SOUL</Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">☰</button><nav className={open ? 'nav-open' : ''}>{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="button button-small" to="/order" onClick={() => setOpen(false)}>Order Now</Link></nav></header>
}
export default Navbar
