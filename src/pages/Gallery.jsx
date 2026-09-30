import { gallery } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'
function Gallery() { return <main><section className="page-heading"><SectionTitle eyebrow="A seat at our table" title="The atmosphere" text="Come for the food. Stay for the feeling." /></section><section className="gallery-grid section">{gallery.map((image, i) => <img key={image} src={image} alt={`Savor & Soul atmosphere ${i + 1}`} />)}</section></main> }
export default Gallery
