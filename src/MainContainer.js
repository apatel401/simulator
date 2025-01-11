import React from "react";
import { useState, useEffect } from "react";
import loadConfigFile from "@tvontario/widget-common/helpers/loadConfigFile";
import Viewer from "./Viewer";
import Controller from "./Controller";
import ProviderComponent from "./Provider";
import TopControls from "./TopControls";

function MainContainer(props) {
  const [config, setConfig] = useState({});

  useEffect(() => {
    async function getData() {
      let response = await loadConfigFile(props.config);
      setConfig(response);
    }
    getData();
  }, []);

  return (
    Object.keys(config).length > 0 && (
      <ProviderComponent config={config}>
          <TopControls />
          <Viewer />
          <Controller />
      </ProviderComponent>
    )
  );
}

export default MainContainer;
