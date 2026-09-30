import { useState } from 'react'
import { dishes } from '../data.js'
import FoodCard from '../components/FoodCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
function OrderOnline() { const [cart, setCart] = useState([]); const add = dish => setCart(items => [...items, dish]); const total = cart.reduce((sum, d) => sum + d.price, 0); return <main><section className="page-heading"><SectionTitle eyebrow="From our kitchen to yours" title="Order online" text="A little Savor & Soul for wherever you are. Frontend demo ordering only." /></section><section className="order-layout section"><div className="food-grid">{dishes.map(d => <FoodCard key={d.id} dish={d} onAdd={add} />)}</div><aside className="cart"><h2>Your order</h2>{cart.length === 0 ? <p>Your cart is waiting for something delicious.</p> : <>{cart.map((d, i) => <p key={`${d.id}-${i}`}>{d.name}<b>${d.price}</b></p>)}<hr /><h3>Total <b>${total}</b></h3><button className="button button-dark" onClick={() => alert('Checkout is a frontend demo.')}>Checkout</button></>}</aside></section></main> }
export default OrderOnline
