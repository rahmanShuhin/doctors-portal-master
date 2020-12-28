import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Context/Sign_In_Context";
export function PrivateRoute({ children, ...rest }) {
  const [user, setUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export function DoctorRoute({ children, ...rest }) {
  const [user, setUser] = useContext(UserContext);
  const admin = user?.email === "fahad@gmail.com" || user?.admin === true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
