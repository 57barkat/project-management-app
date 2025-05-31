import { Form } from 'react-bootstrap';

const FormField = ({ label, type = "text", name, value, onChange, touched, error }) => (
  <Form.Group className="mb-3" controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      isInvalid={touched && !!error}
    />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

export default FormField;
