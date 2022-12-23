import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FourMultiForm(props) {
    return (
    <Form onSubmit={props.submitHandler}>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>{props.textone}</Form.Label>
        <Form.Control placeholder={props.placeholderone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>{props.texttwo}</Form.Label>
        <Form.Control placeholder={props.placeholdertwo} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>{props.textthree}</Form.Label>
        <Form.Control placeholder={props.placeholderthree} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>{props.textfour}</Form.Label>
        <Form.Control placeholder={props.placeholderfour} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FourMultiForm;