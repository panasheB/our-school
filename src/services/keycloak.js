import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    realm: "School-Manager", // realm as configured in Keycloak
    url: "http://0.0.0.0:8080/", // URL of the Keycloak server
    clientId: "PanasheeProjectID", // client id as configured in the realm in Keycloak
    "ssl-required" : "none",
    "public-client" : true,
  })

export default keycloak