import { forwardRef } from "react";
import { CalendarIcon } from "../calendar-icon";
import { DatePickerButtonProps } from "../types/react-year-gogo-types";

export const DatePickerButton = forwardRef<
  HTMLButtonElement,
  DatePickerButtonProps
>(({ title = "Pick a date", onClick, id, className }, ref) => {
  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className={`p-2 min-w-40 rounded border flex items-center gap-2 bg-white hover:bg-neutral-100 duration-150 ${className}`}
      onClick={onClick}
    >
      <CalendarIcon />
      {title}
    </button>
  );
});
