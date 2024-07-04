import React from "react";
import "./style.css";

interface PickerButtonProps {
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
  id?: string;
  className?: string;
}

const PickerButton = React.forwardRef<HTMLButtonElement, PickerButtonProps>(
  ({ title = "Pick a date", onClick, id, className }, ref) => {
    return (
      <button
        id={id}
        ref={ref}
        className={className || "pickerButton"}
        type="button"
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
);

export default PickerButton;
