import { Formik } from 'formik';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signUpSchema } from '../utils/validationSchemas';
import FormField from '../components/FormField';

function SignUp() {
  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div className="p-4 border rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Sign Up</h4>
        <Formik
          validationSchema={signUpSchema}
          onSubmit={(values) => console.log(values)}
          initialValues={{
            fullName: '',
            email: '',
            password: '',
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
