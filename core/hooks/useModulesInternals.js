import { useState, useEffect } from "react";

import { generateKey } from "@vkr/app-utils";

export function useModulesInternals() {
  const [internals, setInternals] = useState([]);

  useEffect(() => {
    const importByModuleName = (item) => import("@vkr/modules-" + item);
    const modules = process.env.MODULES_LIST.map(importByModuleName);

    Promise.all(modules).then((response) => {
      const getItemWithKey = (item) => ({ ...item, key: generateKey() });
      const modulesWithUniqueKeys = response.map(getItemWithKey);

      setInternals(modulesWithUniqueKeys);
    });
  }, []);

  return internals;
}
