 
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import contactImg from '../../Assets/DashboardAsset/contactus.jpg'
function ContactusCard() {
  return (
    <Container fluid>
<Card className="bg-dark text-white">
      <Card.Img  alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Container>
    
  );
}

export default ContactusCard;