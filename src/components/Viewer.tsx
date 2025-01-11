import React, { useContext, useRef } from "react";
import { MicroSimulatorConfig, MicroSimulatorContext } from "./Provider";
import MicroscopeView from "../assets/view.svg";
import MicroscopeViewBlank from "../assets/blank-view.svg";

const Viewer: React.FC = () => {
  const context = useContext(MicroSimulatorContext);
  const config = useContext(MicroSimulatorConfig);
  const viewRef = useRef<HTMLImageElement>(null);
  return (
    <div className="simulator-viewer">
      <img
        src={context.light ? MicroscopeView : MicroscopeViewBlank}
        style={{ zIndex: "3" }}
        alt="Microscope viewer slide visible"
        ref={viewRef}
      />
      {context.light && (
        <img
          className="slide-img"
          src={config.basePath + config.slides[context.currentSlide].magnifications[context.currentMagnification].img}
          style={{ filter: `brightness(${context.brightness}%) blur(${context.blur}px)`, transform: `translate(${context.moveX}px, ${context.moveY}px)` }}
        />
      )}
      {context.scale && (
        <div className="crosshair" >
          <div className="horizontal-line" style={{ transform: `rotate(${context.rotation}deg)` }}></div>
          <div className="vertical-line" style={{ transform: `rotate(${context.rotation}deg)` }}></div>
          <div className="scale" style={{ transform: `rotate(${context.rotation}deg)` }}>
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="scale-mark">
                <div className="mark"></div>
                <div className="label">{i < 5 ? 5 - i : i - 5}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Viewer;
