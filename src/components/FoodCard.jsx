import { Link } from 'react-router-dom'
function FoodCard({ dish, onAdd }) { return <article className="food-card"><img src={dish.image} alt={dish.name} /><div><span className="food-category">{dish.category}</span><h3>{dish.name}</h3><p>{dish.description}</p><strong>${dish.price}</strong>{onAdd ? <button className="text-button" onClick={() => onAdd(dish)}>Add to order +</button> : <Link className="text-button" to="/order">Add to order +</Link>}</div></article> }
export default FoodCard
