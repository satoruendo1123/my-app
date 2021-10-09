import React from "react";
import ReactDOM from "react-dom";
import Cruise0 from "./cruise0";
import Login from "./login";
import Logout from "./logout";
import Profile from "./profile";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-51d-vdeg.us.auth0.com"
    clientId="lqe3atqbAhuTIGJzqiifspGAxFpQoylu"
    redirectUri={window.location.origin}
  >
    <Cruise0 />
    <Login />
    <Logout />
    <Profile />
  </Auth0Provider>,
  document.getElementById("root")
);
