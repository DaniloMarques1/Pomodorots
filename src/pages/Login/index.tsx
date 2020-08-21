import React from 'react';

import {Container, Logo, ViewInput, ViewButton} from './styles';

import TomatoLogo from '../../assets/tomato.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik, FormikProps, FormikValues} from 'formik';
import {Colors} from '../../utils';
import * as yup from 'yup';
import ErrorView from '../../components/ErrorView';
import {useSelector, useDispatch} from 'react-redux';
import {LoginProps} from '../../routes/index'
import {loginRequest} from '../../store/modules/Login/action';
import {Store} from '../../store/modules/types';

interface FormValues {
  email: string;
  password: string;
}

function Login(props: LoginProps) {
  const dispatch = useDispatch();
  const email = props.route.params?.email ? props.route.params.email : "";
  const initialValues: FormValues = {email, password: ""};
  const state = useSelector((state: Store) => state.loginReducer);

  function handleSubmit(values: FormikValues) {
    dispatch(loginRequest(values.email, values.password));
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
        enableReinitialize={true}
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
                disable={state.loading}
                label="Login"
                onPress={props.handleSubmit}
                loading={state.loading}
              />
            </ViewButton>
          </>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
