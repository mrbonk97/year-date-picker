import { useRef, useState } from "react";
import { DatePickerButton } from "../button/date-picker";
import { YearCalendarPortal } from "../calendar/year-calendar-portal";
import { DatePickerProps } from "../types/react-year-gogo-types";

export const YearPicker = ({
  title,
  buttonId,
  buttonClassName,
  calendarId,
  calendarClassName,
  date,
  setDate,
}: DatePickerProps) => {
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

  const handleYear = (clickedYear: number) => {
    if (!setDate) return;
    setDate(date != clickedYear ? clickedYear : undefined);
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
      <YearCalendarPortal
        axis={axis}
        id={calendarId}
        className={calendarClassName}
        open={isOpen}
        date={date}
        handleDate={handleYear}
      />
    </>
  );
};

// useEffect(() => {
//   function handleClickOutside(event: any) {
//     if (!calendarRef.current) return;
//     if (!buttonRef.current) return;
//     if (calendarRef.current.contains(event.target)) return;
//     if (buttonRef.current.contains(event.target)) return;
//     setIsOpen(false);
//   }

//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [calendarRef, buttonRef, handleOpen]);
