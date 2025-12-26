import React, { useReducer } from 'react';
import Button from './Button';

interface IcnProps {
    label: string;
    stepValue: number;
    minValue: number;
    maxValue: number;
}

interface State {
    brightness: number;
    blur: number;
    announcementInfo: string;
    light: boolean;
    scale: boolean;
}

type Action =
    | { type: 'INCREASE_BRIGHTNESS'; step: number }
    | { type: 'DECREASE_BRIGHTNESS'; step: number }
    | { type: 'INCREASE_BLUR'; step: number }
    | { type: 'DECREASE_BLUR'; step: number };

const initialState: State = {
    brightness: 0,
    blur: 0,
    announcementInfo: '',
    light: true,
    scale: true,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'INCREASE_BRIGHTNESS':
            return {
                ...state,
                brightness: Math.min(state.brightness + action.step, 100), // Assuming 100 as max value for brightness
                announcementInfo: 'diapharm_inc',
            };
        case 'DECREASE_BRIGHTNESS':
            return {
                ...state,
                brightness: Math.max(state.brightness - action.step, 0), // Assuming 0 as min value for brightness
                announcementInfo: 'diapharm_dec',
            };
        case 'INCREASE_BLUR':
            return {
                ...state,
                blur: Math.min(state.blur + action.step, 100), // Assuming 100 as max value for blur
                announcementInfo: 'course_inc',
            };
        case 'DECREASE_BLUR':
            return {
                ...state,
                blur: Math.max(state.blur - action.step, 0), // Assuming 0 as min value for blur
                announcementInfo: 'course_dec',
            };
        default:
            return state;
    }
};

const IcnBtnGroup: React.FC<IcnProps> = ({ label, stepValue, minValue, maxValue }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const isBrightnessDisabled = 
        state.brightness === maxValue && label === "diapharm";
    const isBlurDisabled = 
        state.blur === maxValue;

    return (
        <div className="button-group-container">
            <div className="button-group">
                <Button
                    btnType="custom"
                    department="sec"
                    onClick={() =>
                        dispatch(
                            label === "diapharm"
                                ? { type: 'INCREASE_BRIGHTNESS', step: stepValue }
                                : { type: 'INCREASE_BLUR', step: stepValue }
                        )
                    }
                    aria-label={`${label} increase button`}
                    disabled={label === "diapharm"}
                    style={{ minWidth: "50px" }}
                >
                    +
                </Button>
            </div>
        </div>
);
}