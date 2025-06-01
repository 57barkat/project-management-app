import { Formik } from "formik";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../utils/validationSchemas";
import FormField from "../components/FormField";
import { useDispatch } from "react-redux";
import { handleRegister } from "../utils/handleRegister";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="p-4 border rounded shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h4 className="text-center mb-4">Sign Up</h4>
        <Formik
          validationSchema={signUpSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleRegister(values, setSubmitting, navigate, dispatch)
          }
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            role: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <>
              <Form noValidate onSubmit={handleSubmit}>
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  touched={touched.fullName}
                  error={errors.fullName}
                />
                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  touched={touched.email}
                  error={errors.email}
                />
                <FormField
                  label="Password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  touched={touched.password}
                  error={errors.password}
                />

                {/* Role Dropdown */}
                <Form.Group controlId="role" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    isInvalid={!!errors.role && touched.role}
                  >
                    <option value="">Select Role</option>
                    <option value="tester">Tester</option>
                    <option value="developer">Developer</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Create Account
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <span>Already have an account? </span>
                <Link to="/login">Login here</Link>
              </div>
            </>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default SignUp;
