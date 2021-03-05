import React from "react";

import TextField from "@atlaskit/textfield";
import Form, { Field } from "@atlaskit/form";
import { PresentationLogo } from "@vkr/app-common";

import {
  AuthContainer,
  FormContainer,
  SubmitContainer,
  StyledButton,
} from "./styled";

export function AuthComponent({ onSubmit }) {
  return (
    <AuthContainer>
      <PresentationLogo margin="40px" />
      <FormContainer>
        <Form onSubmit={onSubmit}>
          {({ formProps }) => (
            <form {...formProps}>
              <Field name="login" label="Login" defaultValue="" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
              </Field>
              <Field
                name="password"
                label="Password"
                defaultValue=""
                isRequired
              >
                {({ fieldProps }) => (
                  <TextField type="password" {...fieldProps} />
                )}
              </Field>
              <SubmitContainer>
                <StyledButton type="submit" appearance="primary">
                  Sign In
                </StyledButton>
              </SubmitContainer>
            </form>
          )}
        </Form>
      </FormContainer>
    </AuthContainer>
  );
}
