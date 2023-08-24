import '../index.css';
import './Concept.css';
import './Concepts.css';

const Concept = (props) => {
  return (
    <li id='concepts' className='concept'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
};

export default Concept;