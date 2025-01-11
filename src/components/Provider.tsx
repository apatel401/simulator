import React, { useState, createContext } from "react";
import { ContextProps, MicroscopeData } from "../Model";

export const MicroSimulatorContext = createContext<ContextProps>({} as ContextProps);  
export const MicroSimulatorConfig = createContext<MicroscopeData>({} as MicroscopeData);

interface ProviderProp {
  children: React.ReactNode;
  id: number;
  config: MicroscopeData;
}


const ProviderComponent: React.FC<ProviderProp> = (props) => {


const configInformation = {
    ...JSON.parse(JSON.stringify(props.config)),
}

const contextInformation: ContextProps = {
    id: props.id,
    currentSlide: 0,
    currentMagnification: 0,
    showProcedure: false,
    scale: false,
    light: false,
    brightness: 100,
    blur: 8,
    moveX: 0,
    moveY: 0,
    rotation: 0,
    announcementInfo: "",

    updateContext: (contextUpdates: Partial<typeof contextInformation>) => {
        setContextInfo((currentContextInfo) => ({
          ...currentContextInfo,
          ...contextUpdates,
        }));
      },
}

const [contextInfo, setContextInfo] = useState<ContextProps>(contextInformation);
const [configInfo, _] = useState<MicroscopeData>(configInformation);

  return (
    <MicroSimulatorConfig.Provider value={configInfo}>
      <MicroSimulatorContext.Provider value={contextInfo}>
        {props.children}
      </MicroSimulatorContext.Provider>
    </MicroSimulatorConfig.Provider>
  );
}
export default ProviderComponent;