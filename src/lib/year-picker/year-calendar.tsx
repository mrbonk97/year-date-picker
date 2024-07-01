import { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface YearCalendarProps {
  open: boolean;
  axis: {
    y: number;
    x: number;
  };
  selectedYear?: number;
  setSelectedYear?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const YearCalendar = forwardRef<HTMLDivElement, YearCalendarProps>(
  (props, ref) => {
    const { axis, open, selectedYear, setSelectedYear } = props;
    const curYear = new Date().getFullYear() - 100;
    const cellRef = useRef<HTMLTableCellElement[]>([]);

    useEffect(() => {
      if (!open) return;
      if (!cellRef.current) return;

      if (selectedYear)
        cellRef.current[selectedYear - curYear - 4].scrollIntoView();
      else cellRef.current[96].scrollIntoView();
    }, [open]);

    const handleClick = (clickedYear: number) => {
      if (!setSelectedYear) return;
      setSelectedYear(selectedYear === clickedYear ? undefined : clickedYear);
    };

    if (!open) return null;

    return createPortal(
      <div
        className="fixed p-2 h-80 overflow-y-scroll rounded bg-white border shadow-lg"
        ref={ref}
        style={{ left: axis.x, top: axis.y + 5 }}
      >
        <table className="border-separate border-spacing-2 h-80">
          <tbody>
            {new Array(50).fill(1).map((_, idx1) => {
              return (
                <tr key={`tr${idx1}`}>
                  {new Array(4).fill(1).map((_, idx2) => {
                    return (
                      <td
                        role="button"
                        key={`td${idx1 * 4 + idx2}`}
                        ref={(el) => (cellRef.current[idx1 * 4 + idx2] = el!)}
                        aria-pressed={
                          selectedYear === curYear + idx1 * 4 + idx2
                        }
                        className="w-16 h-16 text-center rounded-full hover:bg-neutral-100 aria-pressed:bg-rose-200 aria-pressed:font-medium duration-150"
                        onClick={() => handleClick(curYear + idx1 * 4 + idx2)}
                      >
                        {curYear + idx1 * 4 + idx2}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>,
      document.getElementById("root")!
    );
  }
);
