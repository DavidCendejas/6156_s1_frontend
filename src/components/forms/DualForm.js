import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DualMultiForm(props) {
    return (
    <Form onSubmit={props.submitHandler}>
      <Form.Group className="mb-3" controlId="a_id">
        <Form.Label>{props.textone}</Form.Label>
        <Form.Control placeholder={props.placeholderone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="j_id">
        <Form.Label>{props.texttwo}</Form.Label>
        <Form.Control placeholder={props.placeholdertwo} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DualMultiForm;