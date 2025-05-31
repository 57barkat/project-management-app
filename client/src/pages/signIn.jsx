import { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInSchema } from '../utils/validationSchemas';
import FormField from '../components/FormField';
import { showInfo } from '../utils/toast';

function SignIn() {
 const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current) {
      showInfo('Welcome back!');
      toastShown.current = true;
    }
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div className="p-4 border rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Sign In</h4>
        <Formik
          validationSchema={signInSchema}
          onSubmit={(values) => console.log(values)}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <>
              <Form noValidate onSubmit={handleSubmit}>
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
                  Sign In
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <span>Don't have an account? </span>
                <Link to="/register">Sign up here</Link>
              </div>
            </>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default SignIn;
