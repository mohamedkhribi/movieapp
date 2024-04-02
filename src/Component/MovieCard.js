import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';

function MovieCard({movie}) {
  return (
    
    <Card style={{ width: '18rem' , margin:'20px'}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <ReactStars
  count={5}
  
  size={24}
   half={false}
  value={movie.rate}
  edit={false}
  
  />
       
        
        <Button variant="primary">watch trailer</Button>
      </Card.Body>
    </Card>
    
  );
}

export default MovieCard;