import React from "react";
import { useState, useEffect } from "react";
import { MicroscopeData } from "../Model";
import ProviderComponent from "./Provider";
import TopControls from "./TopControls";
import Viewer from "./Viewer";
import Controller from "./Controller";

interface MainContainerProps {
    id: number;
    config: string;
    }


const MainContainer: React.FC<MainContainerProps> = (props)  => {
  const [config, setConfig] = useState<MicroscopeData>();

  useEffect(() => {
    async function getData() {
      let data = await fetch(props.config);
        let response = await data.json(); 
      setConfig(response);
    }
    getData();
  }, []);

  return (
    config && Object.keys(config).length > 0 && (
      <ProviderComponent config={config} id={props.id}>
          <TopControls />
          <Viewer />
          <Controller />
      </ProviderComponent>
    )
  );
}

export default MainContainer;
