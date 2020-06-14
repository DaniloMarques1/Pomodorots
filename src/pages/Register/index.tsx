import React from 'react';

import {Container, Logo, ViewInput, ViewButton} from './styles';
import TomatoLogo from '../../assets/tomato.png';
import {Formik, FormikValues, FormikProps, FormikHelpers} from 'formik';
import ErrorView from '../../components/ErrorView';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Colors} from '../../utils';
import * as yup from 'yup';
import {RegisterProps} from '../../routes';
import {Http} from '../../services/http';
import {Alert} from 'react-native';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register(props: RegisterProps) {
  const [loading, setLoading] = React.useState(false);
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  async function handleRegister(values: FormikValues, helpers: FormikHelpers<FormValues>) {
    setLoading(true);
    try {
      await Http.post('/users', {
        name: values.name,
        email: values.email,
        password: values.password
      });
      helpers.resetForm({});
      props.navigation.navigate("Login", {email: values.email});
    } catch(e) {
      const message = e.response ? e.response.data.error : "Check your internet connection";
      Alert.alert("Error", message);
    }
    setLoading(false);
  }
  
  const validationForm = yup.object().shape({
    name: yup
      .string()
      .min(6, 'Name must have at least 6 characters')
      .required('Field required'),
    email: yup.string().email('Type a valid email').required('Field required'),
    password: yup
      .string()
      .min(6, 'Passwordword must have at least 6 characteres')
      .required('Field required'),
    confirmPassword: yup.mixed().oneOf([yup.ref("password")], "Password does not match")
  });

  return (
    <Container keyboardVerticalOffset={500}>
      <Logo source={TomatoLogo} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormikValues, helpers: FormikHelpers<FormValues>) => handleRegister(values, helpers)}
        validateOnMount={false}
        validateOnChange={false}
        validationSchema={validationForm}
        >
        {(props: FormikProps<FormValues>) => (
          <>
            <ViewInput>
              <Input
                error={!!props.errors.name}
                label="Your name"
                placeholder="FirstName LastName"
                value={props.values.name}
                onChangeText={props.handleChange('name')}
              />
              <ErrorView error={props.errors.name} />
            </ViewInput>
            <ViewInput>
              <Input
                error={!!props.errors.email}
                label="Your email"
                placeholder="youremail@domain.com"
                value={props.values.email}
                onChangeText={props.handleChange('email')}
              />
              <ErrorView error={props.errors.email} />
            </ViewInput>
            <ViewInput>
              <Input
                error={!!props.errors.password}
                label="Your password"
                placeholder="*********"
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                secureTextEntry={true}
              />
              <ErrorView error={props.errors.password} />
            </ViewInput>
            <ViewInput>
              <Input
                error={!!props.errors.confirmPassword}
                label="Confirm your password"
                placeholder="********"
                value={props.values.confirmPassword}
                onChangeText={props.handleChange('confirmPassword')}
                secureTextEntry={true}
              />
              <ErrorView error={props.errors.confirmPassword} />
            </ViewInput>
            <ViewButton>
              <Button
                label="Register"
                onPress={props.handleSubmit}
                loading={loading}
              />
            </ViewButton>
          </>
        )}
      </Formik>
    </Container>
  );
}

export default Register;
