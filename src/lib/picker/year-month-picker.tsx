import { useRef, useState } from "react";
import { DatePickerButton } from "../button/date-picker";
import { YearMonthCalendar } from "../calendar/year-month-calendar";
import { YearMonthPickerProps } from "../types/react-year-gogo-types";

export const YearMonthPicker = ({
  title,
  buttonId,
  buttonClassName,
  date,
  setDate,
}: YearMonthPickerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [axis, setAxis] = useState({ y: 0, x: 0 });

  const handleClick = () => {
    if (!buttonRef) return;
    const clientRect = buttonRef.current!.getBoundingClientRect();

    setAxis({
      y: clientRect.top + clientRect.height + 5,
      x: clientRect.left,
    });
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      <DatePickerButton
        title={title}
        id={buttonId}
        className={buttonClassName}
        ref={buttonRef}
        onClick={handleClick}
      />
      <YearMonthCalendar
        open={isOpen}
        axis={axis}
        date={date}
        setDate={setDate}
      />
    </>
  );
};
