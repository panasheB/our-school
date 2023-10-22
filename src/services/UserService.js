import Keycloak from "keycloak-js";
import keycloak from "./keycloak"

const _kc = keycloak;

const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    checkLoginIframe: false,
    onLoad: 'login-required' //for user to login on site load .
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const getToken = () => _kc.token;

const isLoggedIn = () => {
  return !!_kc.token;
}

const getUsername = () => _kc.tokenParsed?.preferred_username;

const getFirstname = () => _kc.tokenParsed?.given_name;
const getLastname = () => _kc.tokenParsed?.family_name;
const getName = () => _kc.tokenParsed?.name;
const getEmail = () => _kc.tokenParsed?.email;
const getProfile = () => _kc.profile;

const hasRole = (roles) => roles?.some((role) => _kc?.hasRealmRole(role));
const myroles = () => _kc?.realmAccess?.roles;

const doLogin = _kc.login;
const doLogout = _kc.logout;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const UserService = {
  isLoggedIn,
  getToken,
  getUsername,
  hasRole,
  getFirstname,
  getEmail,
  getProfile,
  getName,
  getLastname,
  initKeycloak,
  doLogin,
  doLogout,
  updateToken,
  myroles

};

export default UserService;