import React, { useContext } from 'react'
import Button  from './Button'
import { MicroSimulatorContext } from './Provider'

interface IcnProps {
    label: string;
    stepValue: number;
    minValue: number;
    maxValue: number;
}

const IcnBtnGroup: React.FC<IcnProps> = ({ label, stepValue, minValue, maxValue }) => {
    const context = useContext(MicroSimulatorContext)
    const universalAction = (operation: string) => {
        switch (label) {
            case "diapharm":
                if (context.brightness < minValue || context.brightness > maxValue) return;
                context.updateContext({
                    brightness: operation === 'increase' ? context.brightness + stepValue : context.brightness - stepValue,
                    announcementInfo: operation === 'increase' ? "diapharm_inc" : "diapharm_dec"
                })
                break;
            case "course focus":
                if (context.blur < 0 || context.blur > maxValue) return;
                context.updateContext({
                    blur: operation === 'increase' ? context.blur + stepValue : context.blur - stepValue,
                    announcementInfo: operation === 'increase' ? "course_inc" : "course_dec"
                })
                break;
            case "fine focus":
                if (context.blur < 0 || context.blur > maxValue) return;
                context.updateContext({
                    blur: operation === 'increase' ? context.blur + stepValue : context.blur - stepValue,
                    announcementInfo: operation === 'increase' ? "fine_inc" : "fine_dec"
                })
                break;
            default:
                break;
        }
    }
    return (
        <div className="button-group-container">
            <div className="button-group">
                <Button
                    btnType="custom"
                    department={"sec"}
                    onClick={() => universalAction("increase")}
                    aria-label={label + " increase button"}
                    disabled={context.brightness === maxValue || context.blur === maxValue || (!context.light && !context.scale)}
                    style={{ minWidth: "50px", height: "50px", width: "50px", padding: "0px" }}
                >
                    +
                </Button>
                <Button
                    btnType="custom"
                    department={"sec"}
                    onClick={() => universalAction("decrease")}
                    aria-label={label + " decrease button"}
                    disabled={(context.brightness === minValue && label === "diapharm") || (context.blur < minValue && label !== "diapharm") || (!context.light && !context.scale)}
                    style={{ minWidth: "50px", height: "50px", width: "50px", padding: "0px" }}
                >
                    -
                </Button>
            </div>
            {label && (
                <div className='btn-label'>
                    <label id="button-group-label" className={`button-group-label`}>
                        {label}
                    </label>
                </div>
            )}
        </div>
    );
}

export default IcnBtnGroup