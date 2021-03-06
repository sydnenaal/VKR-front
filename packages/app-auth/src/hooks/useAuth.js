import { useState, useCallback, useEffect } from "react";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsAuth(() => !!user.token);
  }, [user]);

  // mock auth loading
  const loginUser = useCallback((login, password) => {
    setLoading(true);

    setTimeout(() => {
      if (login === "admin" && password === "admin") {
        const user = {
          login: "admin",
          password: "admin",
          token: "000000000000",
        };

        localStorage.setItem("token", user.token);
        setUser(user);

        setLoading(false);
      }
    }, 1000);
  }, []);

  const logout = useCallback(() => {
    setLoading(true);

    localStorage.clear();
    setUser({});

    setLoading(false);
  }, []);

  return { user, loading, isAuth, loginUser, logout };
}
