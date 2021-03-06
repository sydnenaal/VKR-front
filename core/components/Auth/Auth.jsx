import React, { memo, useCallback, useState } from "react";

import TextField from "@atlaskit/textfield";
import Field from "@atlaskit/form/Field";
import Form from "@atlaskit/form/Form";
import Spinner from "@atlaskit/spinner/spinner";
import { PresentationLogo } from "@vkr/app-common";

import {
  AuthContainer,
  FormContainer,
  SubmitContainer,
  StyledButton,
} from "./styled";

export const AuthComponent = memo(({ loading, onSubmit }) => (
  <AuthContainer>
    <PresentationLogo margin="40px" />
    <FormContainer>
      <Form onSubmit={onSubmit}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field
              name="login"
              label="Login"
              isDisabled={loading}
              defaultValue=""
              isRequired
            >
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field
              name="password"
              label="Password"
              isDisabled={loading}
              defaultValue=""
              isRequired
            >
              {({ fieldProps }) => (
                <TextField type="password" {...fieldProps} />
              )}
            </Field>
            <SubmitContainer>
              <StyledButton type="submit" appearance="primary">
                {loading ? <Spinner appearance="invert" /> : "Sign In"}
              </StyledButton>
            </SubmitContainer>
          </form>
        )}
      </Form>
    </FormContainer>
  </AuthContainer>
));
