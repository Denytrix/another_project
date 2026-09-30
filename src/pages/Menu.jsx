import { useState } from 'react'
import { dishes } from '../data.js'
import FoodCard from '../components/FoodCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
function Menu() { const [category, setCategory] = useState('All'); const categories = ['All', 'Starters', 'Main Dishes', 'Local Dishes', 'Drinks', 'Desserts']; const shown = category === 'All' ? dishes : dishes.filter(d => d.category === category); return <main><section className="page-heading"><SectionTitle eyebrow="From our kitchen" title="The menu" text="A menu that follows the seasons, guided by local produce and a little curiosity." /></section><section className="section menu-page"><div className="filters">{categories.map(c => <button className={category === c ? 'active' : ''} key={c} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="food-grid">{shown.map(d => <FoodCard key={d.id} dish={d} />)}</div></section></main> }
export default Menu
