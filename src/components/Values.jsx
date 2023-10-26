import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"

function Value({ title, description, action }) {
  return (
    <Card className='shadow-sm h-100'>
      <Card.Body className='p-4 d-flex flex-column'>
        <i class="bi bi-chat-dots-fill"></i>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='success' className='mt-auto'>{action}</Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container className="py-5">
      <Row>
        {values.map(({ title, description, action }) => (
          <Col key={title}>
            <Value title={title} description={description} action={action} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
