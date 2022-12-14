import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function QueryForm(props) {
    return (
    <Form onSubmit={props.submitHandler}>
      <Form.Group className="mb-3" controlId="dataQuery">
        <Form.Label>{props.text}</Form.Label>
        <Form.Control placeholder={props.placeholder} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="example">
        <Form.Label>Example2</Form.Label>
        <Form.Control placeholder="Example2" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default QueryForm;