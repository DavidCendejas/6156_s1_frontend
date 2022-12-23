import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ThreeMultiForm(props) {
    return (
    <Form onSubmit={props.submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>{props.textone}</Form.Label>
        <Form.Control placeholder={props.placeholderone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>{props.texttwo}</Form.Label>
        <Form.Control placeholder={props.placeholdertwo} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>{props.textthree}</Form.Label>
        <Form.Control placeholder={props.placeholderthree} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ThreeMultiForm;