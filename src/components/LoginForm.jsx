import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Container = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Input = styled(Field)`
  color: #2f2f2f;
  width: 200px;
`;

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Label htmlFor="login">
            Login
            <Input type="text" name="login" />
            <ErrorMessage name="login" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password" />
          </Label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Container>
  );
};
