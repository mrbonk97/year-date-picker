import { BasicCalendarProps } from "../date-picker-types";

interface Props extends BasicCalendarProps {
  month?: number;
  handleMonth?: (e: number) => void;
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

export const MonthCalendar = ({
  axis,
  open,
  month,
  handleMonth,
  id,
  className,
  calendarRef,
}: Props) => {
  if (!open) return null;

  return (
    <div
      id={id}
      ref={calendarRef}
      className={className || "calendar round-shadow"}
      style={{ top: axis?.y, left: axis?.x }}
    >
      {new Array(3).fill(1).map((_, row) => (
        <ul key={`row${row}`} className="calendar-row">
          {new Array(4).fill(1).map((_, col) => (
            <li
              role="button"
              key={`row${row}col${col}`}
              onClick={() => {
                if (!handleMonth) return;
                handleMonth(row * 4 + col + 1);
              }}
              aria-pressed={row * 4 + col + 1 === month}
              className="calendar-button"
            >
              {row * 4 + col + 1}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
