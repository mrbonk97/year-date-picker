import React from "react";
import "./style.css";

interface PickerButtonProps {
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
  id?: string;
  className?: string;
}

export const PickerButton = React.forwardRef<
  HTMLButtonElement,
  PickerButtonProps
>(({ title = "Pick a date", onClick, id, className }, ref) => {
  return (
    <button
      id={id}
      ref={ref}
      className={className || "pickerButton"}
      type="button"
      onClick={onClick}
    >
      <CalendarIcon />
      {title}
    </button>
  );
});

const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};
