interface YearMonthCalendarProps {
  year?: number;
  setYear?: React.Dispatch<React.SetStateAction<number | undefined>>;
  title?: string;
  id?: string;
  className?: string;
  backgroundColor?: string;
  focusColor?: string;
}

export const YearCalendar = ({
  year,
  setYear,
  id,
  className,
  backgroundColor = "#fff",
  focusColor = "#fecdd3",
}: YearMonthCalendarProps) => {
  const curYear = new Date().getFullYear();

  const handleYear = (clickedYear: number) => {
    if (!setYear) return;

    if (year == clickedYear) {
      setYear(undefined);
      return;
    }

    setYear(clickedYear);
  };

  return (
    <div
      id={id}
      className={`p-2 w-80 h-60 rounded border flex flex-col justify-between overflow-y-scroll ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {new Array(50).fill(1).map((_, idx1) => {
        return (
          <ul key={`ul${idx1}`} className="flex justify-between">
            {new Array(4).fill(1).map((_, idx2) => {
              const _year = curYear + idx1 * 4 + idx2;
              return (
                <li
                  role="button"
                  key={`li${idx1 * 4 + idx2}`}
                  aria-pressed={year === _year}
                  className={`h-16 w-16 flex2 rounded-full hover:bg-neutral-100 duration-150 aria-pressed:bg-[${focusColor}] aria-pressed:font-medium`}
                  onClick={() => handleYear(_year)}
                >
                  {curYear + idx1 * 4 + idx2}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
