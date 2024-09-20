import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4 mt-5 mx-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
<img src="https://maxmod-goggles.myshopify.com/cdn/shop/files/2.webp?v=1713438127&width=1500" alt="" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;