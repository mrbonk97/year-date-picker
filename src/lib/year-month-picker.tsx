import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";

const OFFSET_Y = 4;
const DROPDOWN_WIDTH = 206;
const DROPDOWN_HEIGHT = 196;

type YearMonthType = {
  year: number | null;
  month: number | null;
};

interface Props {
  mode: "year" | "month" | "year-month";
  date: YearMonthType;
  setDate: Dispatch<SetStateAction<YearMonthType>>;
  id?: string;
  name?: string;
  inputClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  bodyContainerClassName?: string;
  bodyClassName?: string;
  buttonClassName?: string;
  message?: string;
  disabled?: boolean;
}

const YearMonthPicker = ({
  mode = "year",
  date,
  setDate,
  id,
  name = "year",
  inputClassName = "ymp-input",
  containerClassName = "ymp-container",
  headerClassName = "ymp-header",
  bodyContainerClassName = "ymp-body-container",
  bodyClassName = "ymp-body",
  buttonClassName = "ymp-button",
  message = "Pick a date",
  disabled = false,
}: Props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isNext, setIsNext] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    setIsOpen(true);
    setIsNext(false);
  }

  function handleClose() {
    setIsOpen(false);
    setIsNext(false);
  }

  function selectYear(n: number) {
    setDate({ year: n, month: null });
    if (mode == "year-month") setIsNext(true);
    else handleClose();
  }

  function selectMonth(n: number) {
    setDate((cur) => ({ ...cur, month: n }));
    handleClose();
  }

  function getMessage() {
    if (date.year && date.month) return `${date.year} · ${date.month}`;
    if (date.year) return date.year.toString();
    if (date.month) return date.month.toString();
    return message;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      if (!buttonRef.current || !containerRef.current) return;
      if (buttonRef.current.contains(event.target) || containerRef.current.contains(event.target))
        return;

      handleClose();
    };

    const handleResize = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();

        let top = rect.top + rect.height + window.scrollY + OFFSET_Y;
        let left = rect.left + window.scrollX;

        if (top + DROPDOWN_HEIGHT > window.innerHeight + window.scrollY) {
          top = rect.top + window.scrollY - DROPDOWN_HEIGHT - OFFSET_Y;
        }
        if (left + DROPDOWN_WIDTH > window.innerWidth + window.scrollX) {
          left = rect.left + rect.width - DROPDOWN_WIDTH + window.scrollX;
        }

        setPosition({ top, left });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (buttonRef.current) resizeObserver.observe(buttonRef.current);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (buttonRef.current) resizeObserver.unobserve(buttonRef.current);
    };
  }, [setIsOpen]);

  return (
    <>
      <input
        readOnly
        ref={buttonRef}
        id={id}
        name={name}
        aria-haspopup="dialog"
        disabled={disabled}
        placeholder={message}
        className={inputClassName}
        value={getMessage()}
        onClick={(e) => {
          e.preventDefault();
          handleOpen();
        }}
      />
      {typeof window !== "undefined" &&
        createPortal(
          <YearMonthContainer
            isOpen={isOpen}
            className={containerClassName}
            top={position.top}
            left={position.left}
          >
            <YearMonthHeader message={getMessage()} className={headerClassName} />
            <div className={bodyContainerClassName} ref={containerRef}>
              <>
                {(mode == "year" || mode == "year-month") && (
                  <YearMonthBody
                    range={100}
                    startNumber={2025}
                    bodyClassName={`${bodyClassName} ${isNext ? "ymp-close" : "ymp-open"}`}
                    buttonClassName={buttonClassName}
                    onClick={selectYear}
                    curValue={date.year}
                  />
                )}
                {(mode == "month" || mode == "year-month") && (
                  <YearMonthBody
                    range={12}
                    startNumber={1}
                    bodyClassName={`${bodyClassName} ${mode == "month" ? "ymp-open" : ""}${
                      isNext && mode == "year-month" ? "ymp-open" : ""
                    }${!isNext && mode == "year-month" ? "ymp-init" : ""}`}
                    buttonClassName={buttonClassName}
                    onClick={selectMonth}
                    curValue={date.month}
                  />
                )}
              </>
            </div>
          </YearMonthContainer>,
          document.body
        )}
    </>
  );
};

interface ContainerProps {
  top: number;
  left: number;
  isOpen: boolean;
  className: string;
  children: React.ReactNode;
}
const YearMonthContainer = ({ top, left, isOpen, className, children }: ContainerProps) => {
  if (!isOpen) return null;

  return (
    <div className={className} style={{ top: top, left: left }}>
      {children}
    </div>
  );
};

interface HeaderProps {
  message: string;
  className: string;
}
const YearMonthHeader = ({ message, className }: HeaderProps) => {
  return <div className={className}>{message}</div>;
};

interface BodyProps {
  range: number;
  startNumber: number;
  onClick: (y: number) => void;
  bodyClassName: string;
  buttonClassName: string;
  curValue: number | null;
}
const YearMonthBody = ({
  range,
  startNumber,
  onClick,
  bodyClassName,
  buttonClassName,
  curValue,
}: BodyProps) => {
  const list = Array.from({ length: range }).map((_, idx) => startNumber + idx);

  return (
    <div className={bodyClassName}>
      {list.map((item) => (
        <button
          key={`ymp-${item}`}
          type="button"
          onClick={() => onClick(item)}
          className={buttonClassName}
          aria-pressed={item == curValue}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export { YearMonthPicker };
export type { YearMonthType };
