import React from 'react';

import {Container, Title, Header, Logo, Form, Label, ViewInput, ViewButton} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../../store/modules/types';
import AsyncStorage from '@react-native-community/async-storage';
import {logout} from '../../store/modules/Login/action';
import TomatoLogo from '../../assets/tomato.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorView from '../../components/ErrorView';
import * as yup from 'yup';
import {Formik, FormikProps, FormikValues, FormikHelpers} from 'formik';
import {Colors} from '../../utils';
import {changePasswordRequest} from '../../store/modules/Pomodoros/action';

interface FormValues {
  currentPassword: string;
  newPassword: string;
}

function Profile() {
  const state    = useSelector((state: Store) => state);
  const dispatch =  useDispatch();
  const initialValues: FormValues = {newPassword: "", currentPassword: ""};

  async function handleLogout() {
    await AsyncStorage.removeItem("pomodoro");
    dispatch(logout());
    //TODO: dispatch um pomodoro clear
  }

  function handleChangePassword(values: FormikValues, helpers: FormikHelpers<FormValues>) {
    if (state.loginReducer.token)
      dispatch(changePasswordRequest(values.currentPassword, values.newPassword, state.loginReducer.token));

    helpers.resetForm({});
  }

  const validationForm = yup.object().shape({
    currentPassword: yup.string().min(6, "Password must have at least 6 characteres").required("Field is required"),
    newPassword: yup.string().min(6, "Password must have at least 6 characteres").required("Field is required"),
  });

  return (
    <Container>
      <Header>
        <Logo source={TomatoLogo} />
        <Title>Hello, {state.pomodoroReducer.name?.split(' ')[0]}!</Title>
      </Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: FormikValues,
          helpers: FormikHelpers<FormValues>,
        ) => handleChangePassword(values, helpers)}
        validateOnMount={false}
        validateOnChange={false}
        validationSchema={validationForm}>
        {(props: FormikProps<FormValues>) => (
          <Form>
            <Label>Change your password</Label>
            <ViewInput>
              <Input
                error={!!props.errors.currentPassword}
                label="Current password"
                value={props.values.currentPassword}
                onChangeText={props.handleChange('currentPassword')}
                placeholder="*********"
                secureTextEntry={true}
              />
              <ErrorView error={props.errors.currentPassword} />
            </ViewInput>
            <ViewInput>
              <Input
                error={!!props.errors.newPassword}
                label="New password"
                value={props.values.newPassword}
                onChangeText={props.handleChange('newPassword')}
                placeholder="*********"
                secureTextEntry={true}
              />
              <ErrorView error={props.errors.currentPassword} />
            </ViewInput>
            <ViewButton>
              <Button
                label="Change password"
                onPress={props.handleSubmit}
                backgroundColor={Colors.PRIMARY_RED}
              />
            </ViewButton>
            <ViewButton>
              <Button
                label="Logout"
                onPress={handleLogout}
                backgroundColor={Colors.PRIMARY_WHITE}
                labelColor={Colors.PRIMARY_GREEN}
              />
            </ViewButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Profile;
