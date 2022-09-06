import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

export const CardComponent = ({title, url, description}) =>{
    return(
    <Card className="mt-4 text-center bg-secondary text-light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Saber más</Button>
      </Card.Body>
    </Card>
    )
}

export default CardComponent

