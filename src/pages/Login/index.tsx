import React from 'react';

import {Container, Logo, ViewInput, ViewButton} from './styles';

import TomatoLogo from '../../assets/tomato.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik, FormikProps, FormikValues} from 'formik';
import {Colors} from '../../utils';
import * as yup from 'yup';
import ErrorView from '../../components/ErrorView';

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  //TODO: email será passado da tela de registro
  const initialValues: FormValues = {email: "", password: ""};
  
  function handleSubmit(values: FormikValues) {
    //TODO: requisicao para obtenção do famigerado TOKEN
    console.log(values);
  }

  const validationForm = yup.object().shape({
    email: yup
      .string()
      .email('Type a valid email')
      .required('Field is required'),
    password: yup
      .string()
      .min(6, 'You need at least 6 caracteres')
      .required('Field is required'),
  });

  return (
    <Container>
      <Logo source={TomatoLogo} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormikValues) => handleSubmit(values)}
        validationSchema={validationForm}
        validateOnBlur={true}
        validateOnMount={false}
        validateOnChange={false}>
        {(props: FormikProps<FormValues>) => (
          <>
            <ViewInput>
              <Input
                error={!!props.errors.email}
                value={props.values.email}
                label="Email"
                placeholder="youremail@domain.com"
                onChangeText={props.handleChange('email')}
              />
              <ErrorView error={props.errors.email} />
            </ViewInput>
            <ViewInput>
              <Input
                error={!!props.errors.password}
                value={props.values.password}
                label="Password"
                placeholder="*************"
                secureTextEntry={true}
                onChangeText={props.handleChange('password')}
              />
              <ErrorView error={props.errors.password} />
            </ViewInput>
            <ViewButton>
              <Button
                label="Login"
                onPress={props.handleSubmit}
                backgroundColor={Colors.PRIMARY_RED}
              />
            </ViewButton>
          </>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
