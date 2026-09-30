import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

function ProjectPreview() {
  return (
    <section id="center">
      <div className="hero">
        <img className="base" src={heroImg} width="170" height="179" alt="Restaurant project preview" />
      </div>
      <div>
        <h1>Restaurant</h1>
        <p>A warm, welcoming restaurant experience for discovering food and making reservations.</p>
      </div>
      <Link className="counter" to="/projects/restaurant">View Project</Link>
    </section>
  )
}

export default ProjectPreview
