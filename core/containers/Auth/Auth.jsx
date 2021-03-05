import React from "react";

import { AuthComponent } from "../../components";

export default function Auth() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return <AuthComponent onSubmit={handleSubmit} />;
}
