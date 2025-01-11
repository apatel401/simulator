import React, { useContext } from "react";
import { MicroSimulatorConfig, MicroSimulatorContext } from "./Provider";
import { ContextProps, MicroscopeData } from "../Model";

const Magnify: React.FC = () => {
  const context = useContext<ContextProps>(MicroSimulatorContext);
  const config = useContext<MicroscopeData>(MicroSimulatorConfig);

  const handleMagnification = (id: number) => {
context.updateContext({
    currentMagnification: id
})
  }
  return (
    <div className="magnification-wrapper">
          <label>Select Magnification</label>
        <div className="thumub-wrapper">
        {config.slides[context.currentSlide].magnifications.map((item, index) => {
        return (
          <div key={index} 
               className={`slide-thumbnail ${context.currentMagnification  === index ? "active" : ""}`} 
               onClick={() => handleMagnification(index)}
               style={{pointerEvents: context.light ? "all" : "none"}}
               tabIndex={context.light ? 0 : -1}
               aria-disabled={context.light ? "false" : "true"}
               aria-label={item.thumbnailAlt}>
            <img src={config.basePath + item.thumbnail} alt={item.thumbnailAlt}/>
            <p className="animate-underline">{item.title}</p>
          </div>
        );
      })}
        </div>
    </div>
  );
};

export default Magnify;