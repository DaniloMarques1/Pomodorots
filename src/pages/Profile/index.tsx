import React from 'react';

import {
  Container,
  Title,
  Header,
  Logo,
  Form,
  Label,
  ViewInput,
  ViewButton,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../store/modules/types';
import AsyncStorage from '@react-native-community/async-storage';
import { logout } from '../../store/modules/Login/action';
import { logoutPomodoro } from '../../store/modules/Pomodoros/action';
// @ts-ignore
import TomatoLogo from '../../assets/tomato.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorView from '../../components/ErrorView';
import * as yup from 'yup';
import { Formik, FormikProps, FormikValues, FormikHelpers } from 'formik';
import { Colors } from '../../utils';
import { changePasswordRequest } from '../../store/modules/Pomodoros/action';
import { updateTime } from '../../store/modules/Timer/actions';
import Loading from '../../components/Loading';
import { ScrollView } from 'react-native';

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
}

interface ChangePomodoroMinuteForm {
  pomodoroMinutes: string;
  breakMinutes: string;
}

function Profile() {
  const state = useSelector((state: Store) => state);
  const dispatch = useDispatch();
  const changePasswordForm: ChangePasswordForm = {
    newPassword: '',
    currentPassword: '',
  };
  const changeMinute: ChangePomodoroMinuteForm = {
    pomodoroMinutes: '',
    breakMinutes: '',
  };

  async function handleLogout() {
    await AsyncStorage.removeItem('pomodoro');
    dispatch(logout());
    dispatch(logoutPomodoro());
  }

  function handleChangePassword(
    values: FormikValues,
    helpers: FormikHelpers<ChangePasswordForm>,
  ) {
    if (state.loginReducer.token)
      dispatch(
        changePasswordRequest(
          values.currentPassword,
          values.newPassword,
          state.loginReducer.token,
        ),
      );

    helpers.resetForm({});
  }

  function handleUpdateTimer(
    values: FormikValues,
    helpers: FormikHelpers<ChangePomodoroMinuteForm>,
  ) {
    //TODO: dispatch setTime
    const time = {
      pomodoroTime: { minute: Number(values.pomodoroMinutes), second: 0 },
      breakTime: { minute: Number(values.breakMinutes), second: 0 },
    };
    dispatch(updateTime(time));
    helpers.resetForm({});
  }

  const validateChangePassword = yup.object().shape({
    currentPassword: yup
      .string()
      .min(6, 'Password must have at least 6 characteres')
      .required('Field is required'),
    newPassword: yup
      .string()
      .min(6, 'Password must have at least 6 characteres')
      .required('Field is required'),
  });

  const validateChangeMinute = yup.object().shape({
    pomodoroMinutes: yup
      .number()
      .typeError('Must be a number')
      .min(20, 'A pomodoro must have at least 20 minutes')
      .required('Field required'),
    breakMinutes: yup
      .number()
      .typeError('Must be a number')
      .min(5, 'A pomodoro break must have at least 5 minutes')
      .required('Field required'),
  });

  return (
    <Container>
      <Loading loading={state.pomodoroReducer.changePasswordLoading} />
      <Header>
        <Logo source={TomatoLogo} />
        <Title>Hello, {state.pomodoroReducer.name?.split(' ')[0]}!</Title>
      </Header>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Form>
          <Formik
            initialValues={changeMinute}
            onSubmit={(
              values,
              helpers: FormikHelpers<ChangePomodoroMinuteForm>,
            ) => handleUpdateTimer(values, helpers)}
            validateOnMount={false}
            validateOnChange={false}
            validationSchema={validateChangeMinute}>
            {(props: FormikProps<ChangePomodoroMinuteForm>) => (
              <>
                <ViewInput>
                  <Input
                    error={!!props.errors.pomodoroMinutes}
                    label="Pomodoro minutes"
                    value={props.values.pomodoroMinutes}
                    onChangeText={props.handleChange('pomodoroMinutes')}
                    keyboardType="numeric"
                    placeholder="25"
                  />
                  <ErrorView error={props.errors.pomodoroMinutes} />
                </ViewInput>
                <ViewInput>
                  <Input
                    error={!!props.errors.breakMinutes}
                    label="Break minutes"
                    value={props.values.breakMinutes}
                    onChangeText={props.handleChange('breakMinutes')}
                    keyboardType="numeric"
                    placeholder="5"
                  />
                  <ErrorView error={props.errors.breakMinutes} />
                </ViewInput>
                <ViewButton>
                  <Button
                    label="Update timer"
                    loading={state.timeState.loading}
                    disable={state.timeState.loading}
                    onPress={props.handleSubmit}
                  />
                </ViewButton>
              </>
            )}
          </Formik>
        </Form>
        <Form>
          <Formik
            initialValues={changePasswordForm}
            onSubmit={(
              values: FormikValues,
              helpers: FormikHelpers<ChangePasswordForm>,
            ) => handleChangePassword(values, helpers)}
            validateOnMount={false}
            validateOnChange={false}
            validationSchema={validateChangePassword}>
            {(props: FormikProps<ChangePasswordForm>) => (
              <>
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
              </>
            )}
          </Formik>
        </Form>
      </ScrollView>
    </Container>
  );
}

export default Profile;
