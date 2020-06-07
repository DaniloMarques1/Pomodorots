import React from 'react';

import {Container, ErrorText} from './styles';

interface ErrorProps {
  error?: string;
}

function ErrorView(props: ErrorProps) {
  return (
    <Container>
    {props.error && (
      <ErrorText>{props.error}</ErrorText>
    )}
    </Container>
  );
}

export default ErrorView;
