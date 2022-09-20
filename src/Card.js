import './Card.css';

function Card(props){
    
    return  <div className="card">
                    <h4 id="text"> {props.value.text}</h4>
                    <h6 id="author">{props.value.author}</h6>
    </div>
}

export default Card;