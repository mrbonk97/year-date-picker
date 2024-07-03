type dateType = {
  year: number | undefined;
  month: number | undefined;
};

interface BasicCalendarProps {
  axis?: {
    y: number;
    x: number;
  };
  open?: boolean;
  id?: string;
  className?: string;
  backgroundColor?: string;
  focusColor?: string;
}

interface CalendarPortalProps extends BasicCalendarProps {
  date?: number;
  handleDate?: (e: number) => void;
}

interface YearMonthCalendarPortalProps extends BasicCalendarProps {
  date?: dateType;
  handleYear: (e: number) => void;
  handleMonth: (e: number) => void;
  setDate?: React.Dispatch<React.SetStateAction<dateType>>;
  title?: string;
}

interface YearMonthCalendarProps extends YearMonthCalendarPortalProps {
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

interface CalendarProps extends CalendarPortalProps {
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

export type {
  dateType,
  CalendarPortalProps,
  YearMonthCalendarPortalProps,
  YearMonthCalendarProps,
  CalendarProps,
};
