import React, { useContext } from "react";
import { MicroSimulatorContext } from "./Provider";
import IcnBtnGroup from "./IcnBtnGroup";
import Button from "./Button";

const Controller: React.FC = () => {
  const context = useContext(MicroSimulatorContext);
  const lightsOff = !context.light && !context.scale;
   // handling slide move in up, down, left, right
   const handleMove = (direction: string) => {
    switch (direction) {
      case "up":
        if (context.moveY >= 14) return;
        context.updateContext({
          moveY: context.moveY + 2,
          announcementInfo: "move_up",
        });
        break;
      case "down":
        if (context.moveY <= -14) return;
        context.updateContext({
          moveY: context.moveY - 2,
          announcementInfo: "move_down",
        });
        break;
      case "left":
        if (context.moveX >= 14) return;
        context.updateContext({
          moveX: context.moveX + 2,
          announcementInfo: "move_left",
        });
        break;
      case "right":
        if (context.moveX <= -14) return;
        context.updateContext({
          moveX: context.moveX - 2,
          announcementInfo: "move_right",
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="simulator-controls">
      <div className="control-group">
      <IcnBtnGroup
          label="diapharm"
          stepValue={5}
          minValue={0}
          maxValue={160}
        />
        <IcnBtnGroup
          label="course focus"
          stepValue={3}
          minValue={7}
          maxValue={20}
        />
        <IcnBtnGroup
          label="fine focus"
          stepValue={1}
          minValue={1}
          maxValue={20}
        />
      </div>
         <div className="simulator-move-btn">
        <div>
          <Button
            btnType="custom"
            department={"sec"}
            onClick={() => handleMove("up")}
            aria-label="Move up"
            style={{
              minWidth: "50px",
              height: "50px",
              width: "50px",
              padding: "0px",
            }}
            disabled={context.moveY === 14 || lightsOff}
          >
            ↑
          </Button>
          <Button
            btnType="custom"
            department={"sec"}
            onClick={() => handleMove("down")}
            aria-label="move down"
            style={{
              minWidth: "50px",
              height: "50px",
              width: "50px",
              padding: "0px",
            }}
            disabled={context.moveY === -14 || lightsOff}
          >
            ↓
          </Button>
          <Button
            btnType="custom"
            department={"sec"}
            onClick={() => handleMove("left")}
            aria-label="move left"
            style={{
              minWidth: "50px",
              height: "50px",
              width: "50px",
              padding: "0px",
            }}
            disabled={context.moveX >= 14 || lightsOff}
          >
            ←
          </Button>
          <Button
            btnType="custom"
            department={"sec"}
            onClick={() => handleMove("right")}
            aria-label="move right"
            style={{
              minWidth: "50px",
              height: "50px",
              width: "50px",
              padding: "0px",
            }}
            disabled={context.moveX <= -14 || lightsOff}
          >
            →
          </Button>
        </div>
        <div className="btn-label">
          <label>Move Slide</label>
        </div>
      </div>
    </div>
  );
};

export default Controller;
