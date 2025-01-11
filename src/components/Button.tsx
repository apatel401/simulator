import React, { forwardRef } from 'react';
import "./button.scss";

interface BTNProps {
    department: string;
    btnType?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    ariaLabel?: string;
    disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, BTNProps>((props, ref) => {
    const { department, btnType, className, children, ...otherProps } = props;
    let usingDefault = false;
    let btnText;
    let ariaLabel;
    switch (btnType) {
        case "check-answer":
            btnText = "Check Answer";
            ariaLabel = "Check Answer";
            break;
        case "check-answers":
            btnText = "Check Answers";
            ariaLabel = "Check Answers";
            break;
        case "play-again":
            btnText = "Play Again";
            ariaLabel = "Play Again";
            break;
        case "try-again":
            btnText = "Try Again";
            ariaLabel = "Try Again";
            break;
        case "reset":
            btnText = "Reset";
            ariaLabel = "Reset";
            break;
        case "flip":
            btnText = "";
            ariaLabel = "Flip";
            break;
        case "shuffle":
            btnText = "Shuffle";
            ariaLabel = "Shuffle";
            break;
        case "audio-btn-play":
            btnText = "";
            ariaLabel = "Play";
            break;
        case "audio-btn-pause":
            btnText = "";
            ariaLabel = "Pause";
            break;
        case "arrow-btn-left":
            btnText = "";
            ariaLabel = "Previous";
            break;
        case "arrow-btn-right":
            btnText = "";
            ariaLabel = "Next";
            break;
        case "arrow-btn-up":
            btnText = "";
            ariaLabel = "Up";
            break;
        case "arrow-btn-down":
            btnText = "";
            ariaLabel = "Down";
            break;
        case "settings-btn":
            btnText = "";
            ariaLabel = "Settings";
            break;
        default:
            btnText = children;
            ariaLabel = props.ariaLabel;
            usingDefault = true;
            break;
    }

    const classes = [
        'comp-lib',
        'ilo-btn',
        className,
        department,
        btnType,
        usingDefault && 'custom'
      ].filter(Boolean).join(' ');
    
    
    return (
        <button
            ref={ref}
            className={`btn custom ${classes} ${usingDefault ? 'default' : ''}`}
            aria-label={ariaLabel}
            {...otherProps}
        >
            {btnText}
        </button>
    );
});

export default Button;