import  { useContext } from "react";
import { MicroSimulatorConfig, MicroSimulatorContext } from "./Provider";
import ToggleButton from "./ToggleBtn";
import Button  from "./Button";
import Magnify from "./Magnify";

export default function TopControls(): JSX.Element {
  const context = useContext(MicroSimulatorContext);
  const config = useContext(MicroSimulatorConfig);
  // const lightsOff = !context.light && !context.scale;
  // handling light and scale toggle
  const handleToggle = (type: string) => {
    if (type === "light") {
      context.updateContext({
        light: !context.light,
        scale: context.light && context.scale ? !context.scale : context.scale,
        announcementInfo: "light_toggle",
      });
      // setLight(!light);
    } else if (type === "scale") {
      if (!context.light) return;
      context.updateContext({
        scale: !context.scale,
        announcementInfo: "scale_toggle",
      });
    }
  };

  const handleSlide = (id: number) => {
    context.updateContext({
      currentSlide: id,
      currentMagnification:
        context.currentSlide !== id ? 0 : context.currentMagnification,
    });
  };

  const slideRotation = (direction: string) => {
    switch (direction) {
      case "clockwise":
        context.updateContext({
          rotation: context.rotation + 2,
          announcementInfo: "rotate_cw",
        });
        break;
      case "anti-clockwise":
        context.updateContext({
          rotation: context.rotation - 2,
          announcementInfo: "rotate_ccw",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="top-container">
      <div className="simulator-toggle">
        <ToggleButton
          handleToggle={() => handleToggle("light")}
          isToggled={context.light}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle("light");
            }
          }}
          label={"Light"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px"
          }}> 
            <Button
              department={config.department}
              btnType={"custom"}
              onClick={() => slideRotation("anti-clockwise")}
              aria-label="move right"
              style={{
                minWidth: "50px",
                height: "50px",
                width: "50px",
                padding: "0px",
              }}
              disabled={context.moveX <= -14 || !context.scale}
            >
              ↺
            </Button>
            <ToggleButton
              handleToggle={() => handleToggle("scale")}
              isToggled={context.scale}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle("scale");
                }
              }}
              label={"Scale"}
            />
            <Button
            department="sec"
            btnType="custom"
              onClick={() => slideRotation("clockwise")}
              aria-label="move left"
              style={{
                minWidth: "50px",
                height: "50px",
                width: "50px",
                padding: "0px",
              }}
              disabled={context.moveX >= 14 || !context.scale}
            >
              ↻
            </Button>
            
          </div>
          <div className="slide-controls">
            <div className="slide-options">
              {config.slides.map((slide, index) => {
                return (
                  <Button
                    key={index}
                    department={config.department}
                    btnType={"custom"}
                    className={`slide-btn ${
                      context.currentSlide === index ? "active" : ""
                    }`}
                    onClick={() => handleSlide(index)}
                    disabled={!context.light}
                  >
                    {"Slide " + (index + 1)}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <Magnify />
      </div>
    </div>
  );
};
