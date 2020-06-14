import React from 'react';

import {Container, Form, InputView, ButtonView, Title, Header, Logo} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {Formik,FormikValues, FormikProps, FormikHelpers} from 'formik';
import {Store} from '../../store/modules/types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorView from '../../components/ErrorView';
import TomatoLogo from '../../assets/tomato.png';
import * as yup from 'yup';
import {addPomodoroRequest} from '../../store/modules/Pomodoros/action';

interface FormValues {
  title: string;
  qtdPomodoros: string;
}

function AddPomodoro() {
  const initialValues: FormValues = {title: "", qtdPomodoros: ""};
  const state                     = useSelector((state: Store) => state);
  const dispatch                  = useDispatch();

  function handleCreate(values: FormikValues, helpers: FormikHelpers<FormValues>) {
    //TODO: dispatch a create action
    helpers.resetForm({});
    if (state.loginReducer.token)
      dispatch(addPomodoroRequest(state.loginReducer.token, values.title, values.qtdPomodoros));
  }

  const validationForm = yup.object().shape({
    title: yup.string().required("Field is required"),
    qtdPomodoros: yup.number().typeError("Positive numbers only").min(1, "Pomodoro must be at least 1").required("Field is required")
  });

  return (
    <Container>
      <Header>
        <Logo source={TomatoLogo} />
      </Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormikValues, helpers: FormikHelpers<FormValues>) => handleCreate(values, helpers)}
        validateOnMount={false}
        validateOnChange={false}
        validationSchema={validationForm}>
        {(props: FormikProps<FormValues>) => (
          <Form>
            <Title>Add a new Pomodoro</Title>
            <InputView>
              <Input
                error={!!props.errors.title}
                label="Pomodoro name: "
                value={props.values.title}
                placeholder="Study math"
                onChangeText={props.handleChange('title')}
              />
              <ErrorView error={props.errors.title} />
            </InputView>
            <InputView>
              <Input
                error={!!props.errors.qtdPomodoros}
                label="How much pomodoros?"
                value={props.values.qtdPomodoros}
                placeholder="2"
                onChangeText={props.handleChange('qtdPomodoros')}
                keyboardType="numeric"
              />
              <ErrorView error={props.errors.qtdPomodoros} />
            </InputView>
            <ButtonView>
              <Button label="Create" onPress={props.handleSubmit} />
            </ButtonView>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddPomodoro;
