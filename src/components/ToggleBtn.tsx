import React, { useContext } from 'react';
import { MicroSimulatorContext } from './Provider';
import { ContextProps } from '../Model';

type TBPropType = {
  isToggled: boolean;
  handleToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  label: string;
};

const ToggleButton: React.FC<TBPropType> = ({ isToggled, handleToggle, onKeyDown, label }) => {
  const context = useContext<ContextProps>(MicroSimulatorContext)
  return (
    <div
      className={`toggle-container`}
      aria-label={label}
      role="switch"
      aria-checked={isToggled}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={onKeyDown}
    >
      {label && (
        <span className="toggle-label" style={{ marginLeft: label === 'Scale' ? "0px" : "10px", marginRight: "10px" }}>{label}</span>
      )}
      <div className={`toggle-button ${isToggled ? 'toggled-on' : 'toggled-off'}  ${!context.light && label == 'Scale' && "disabled"}`}>
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
