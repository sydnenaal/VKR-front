import { useState, useLayoutEffect } from "react";
import { assoc, map, compose } from "ramda";
import { v4 as uuidv4 } from "uuid";

export function useModulesInternals() {
  const [internals, setInternals] = useState([]);

  useLayoutEffect(() => {
    const importByModuleName = (item) => import("@vkr/modules-" + item);
    const prepareModules = compose(setInternals, map(assoc("key", uuidv4())));

    const modulePromises = process.env.MODULES_LIST.map(importByModuleName);

    Promise.all(modulePromises).then(prepareModules);
  }, []);

  return internals;
}
