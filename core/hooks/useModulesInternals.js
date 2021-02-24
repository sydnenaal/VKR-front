import { useState, useEffect } from "react";

import { generateKey } from "@vkr/app-utils";

export function useModulesInternals() {
  const [internals, setInternals] = useState([]);

  useEffect(() => {
    const modules = process.env.MODULES_LIST.map((item) =>
      import("@vkr/modules-" + item)
    );

    Promise.all(modules).then((response) => {
      const modulesWithUniqueKeys = response.map((item) => ({
        ...item,
        key: generateKey(),
      }));

      setInternals(modulesWithUniqueKeys);
    });
  }, []);

  return internals;
}
