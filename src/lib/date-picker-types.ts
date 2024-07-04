type DatePickerType = {
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
  date?: DatePickerType;
  handleYear: (e: number) => void;
  handleMonth: (e: number) => void;
  setDate?: React.Dispatch<React.SetStateAction<DatePickerType>>;
  title?: string;
}

interface YearMonthCalendarProps extends YearMonthCalendarPortalProps {
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

interface CalendarProps extends CalendarPortalProps {
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

export type {
  DatePickerType,
  CalendarPortalProps,
  YearMonthCalendarPortalProps,
  YearMonthCalendarProps,
  CalendarProps,
};
