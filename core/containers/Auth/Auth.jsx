import React from "react";

import { AuthComponent } from "../../components";

export function AuthContainer() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return <AuthComponent onSubmit={handleSubmit} />;
}
