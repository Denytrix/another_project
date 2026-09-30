import { Link } from 'react-router-dom'

function ProjectLinks() {
  return (
    <section id="next-steps">
      <div id="docs">
        <h2>Restaurant</h2>
        <p>Thoughtful dining, from the first look to the final booking.</p>
        <ul><li><Link to="/projects/restaurant">View project</Link></li></ul>
      </div>
      <div id="social">
        <h2>Explore</h2>
        <p>See the details behind the concept.</p>
        <ul><li><Link to="/">Back home</Link></li></ul>
      </div>
    </section>
  )
}

export default ProjectLinks
