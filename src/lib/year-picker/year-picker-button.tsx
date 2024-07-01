import { MouseEvent, useEffect, useRef, useState } from "react";
import { CalendarIcon } from "../calendar-icon";
import { YearCalendar } from "./year-calendar";

interface YearPickerButtonProps {
  title?: string;
  selectedYear?: number;
  setSelectedYear?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const YearPickerButton = ({
  title = "Pick a date",
  selectedYear,
  setSelectedYear,
}: YearPickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [axis, setAxis] = useState({ y: 0, x: 0 });
  const calendarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleOpen = () => setIsOpen((cur) => !cur);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!calendarRef.current) return;
      if (!buttonRef.current) return;
      if (calendarRef.current.contains(event.target)) return;
      if (buttonRef.current.contains(event.target)) return;
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef, buttonRef, handleOpen]);

  const handleOpenChange = (e: MouseEvent<HTMLButtonElement>) => {
    const clientRect = document
      .getElementById("year-picker-button")
      ?.getBoundingClientRect()!;

    setAxis({ y: clientRect.top + clientRect.height, x: clientRect.left });
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        id="year-picker-button"
        className="p-2 min-w-40 rounded border flex items-center gap-2 bg-white hover:bg-neutral-100 duration-150"
        onClick={handleOpenChange}
      >
        <CalendarIcon />
        {title}
      </button>
      <YearCalendar
        axis={axis}
        open={isOpen}
        ref={calendarRef}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </>
  );
};
