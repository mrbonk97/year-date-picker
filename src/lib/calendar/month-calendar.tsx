interface MonthCalendarProps {
  month?: number;
  setMonth?: React.Dispatch<React.SetStateAction<number | undefined>>;
  title?: string;
  id?: string;
  className?: string;
  backgroundColor?: string;
  focusColor?: string;
}

export const MonthCalendar = ({
  month,
  setMonth,
  id,
  className,
  backgroundColor = "#fff",
  focusColor = "#fecdd3",
}: MonthCalendarProps) => {
  const handleMonth = (clickedMonth: number) => {
    if (!setMonth) return;

    if (month == clickedMonth) {
      setMonth(undefined);
      return;
    }

    setMonth(clickedMonth);
  };

  return (
    <div
      id={id}
      className={`p-2 w-80 h-60 rounded border flex flex-col justify-between ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {new Array(3).fill(1).map((_, idx) => (
        <ul key={idx} className="flex justify-between">
          <li
            role="button"
            onClick={() => handleMonth(idx * 4 + 1)}
            aria-pressed={idx * 4 + 1 === month}
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-[${focusColor}] aria-pressed:font-medium duration-150`}
          >
            {idx * 4 + 1}
          </li>
          <li
            role="button"
            onClick={() => handleMonth(idx * 4 + 2)}
            aria-pressed={idx * 4 + 2 === month}
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-[${focusColor}] aria-pressed:font-medium duration-150`}
          >
            {idx * 4 + 2}
          </li>
          <li
            role="button"
            onClick={() => handleMonth(idx * 4 + 3)}
            aria-pressed={idx * 4 + 3 === month}
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-[${focusColor}] aria-pressed:font-medium duration-150`}
          >
            {idx * 4 + 3}
          </li>
          <li
            role="button"
            onClick={() => handleMonth(idx * 4 + 4)}
            aria-pressed={idx * 4 + 4 === month}
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-[${focusColor}] aria-pressed:font-medium duration-150`}
          >
            {idx * 4 + 4}
          </li>
        </ul>
      ))}
    </div>
  );
};
