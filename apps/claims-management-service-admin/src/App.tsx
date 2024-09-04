import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClaimList } from "./claim/ClaimList";
import { ClaimCreate } from "./claim/ClaimCreate";
import { ClaimEdit } from "./claim/ClaimEdit";
import { ClaimShow } from "./claim/ClaimShow";
import { PolicyholderList } from "./policyholder/PolicyholderList";
import { PolicyholderCreate } from "./policyholder/PolicyholderCreate";
import { PolicyholderEdit } from "./policyholder/PolicyholderEdit";
import { PolicyholderShow } from "./policyholder/PolicyholderShow";
import { PolicyList } from "./policy/PolicyList";
import { PolicyCreate } from "./policy/PolicyCreate";
import { PolicyEdit } from "./policy/PolicyEdit";
import { PolicyShow } from "./policy/PolicyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ClaimsManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Claim"
          list={ClaimList}
          edit={ClaimEdit}
          create={ClaimCreate}
          show={ClaimShow}
        />
        <Resource
          name="Policyholder"
          list={PolicyholderList}
          edit={PolicyholderEdit}
          create={PolicyholderCreate}
          show={PolicyholderShow}
        />
        <Resource
          name="Policy"
          list={PolicyList}
          edit={PolicyEdit}
          create={PolicyCreate}
          show={PolicyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
