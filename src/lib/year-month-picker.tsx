import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { createPortal } from "react-dom";

const OFFSET_Y = 4;

type YearMonthType = {
  year: number | null;
  month: number | null;
};

interface Props {
  type: "year" | "month" | "year-month";
  date: YearMonthType;
  setDate: Dispatch<SetStateAction<YearMonthType>>;
  id?: string;
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
  type = "year",
  date,
  setDate,
  id,
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
    if (type == "year-month") setIsNext(true);
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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setIsOpen]);

  useLayoutEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.top + rect.height, left: rect.left });
    }
  }, [isOpen]);

  return (
    <>
      <input
        readOnly
        ref={buttonRef}
        id={id}
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
      {createPortal(
        <YearMonthContainer
          isOpen={isOpen}
          className={containerClassName}
          top={position.top + OFFSET_Y}
          left={position.left}
        >
          <YearMonthHeader message={getMessage()} className={headerClassName} />
          <div className={bodyContainerClassName} ref={containerRef}>
            <>
              {(type == "year" || type == "year-month") && (
                <YearMonthBody
                  range={100}
                  startNumber={2025}
                  bodyClassName={`${bodyClassName} ${isNext ? "ymp-close" : "ymp-open"}`}
                  buttonClassName={buttonClassName}
                  onClick={selectYear}
                  curValue={date.year}
                />
              )}
              {(type == "month" || type == "year-month") && (
                <YearMonthBody
                  range={12}
                  startNumber={1}
                  bodyClassName={`${bodyClassName} ${isNext ? "ymp-open" : "ymp-init"}`}
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
          aria-selected={item == curValue}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export { YearMonthPicker };
export type { YearMonthType };
