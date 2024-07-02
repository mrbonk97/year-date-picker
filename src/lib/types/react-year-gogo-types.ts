export type dateType = {
  year: number | undefined;
  month: number | undefined;
};

export interface YearMonthCalendarProps {
  open?: boolean;
  axis: {
    y: number;
    x: number;
  };
  date: dateType;
  setDate?: React.Dispatch<React.SetStateAction<dateType>>;
  title?: string;
  id?: string;
  className?: string;
  backgroundColor?: string;
  focusColor?: string;
}

export interface DatePickerProps {
  title?: string;
  buttonId?: string;
  buttonClassName?: string;
  calendarId?: string;
  calendarClassName?: string;
  date?: number;
  setDate: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface YearPickerProps {
  title?: string;
  buttonId?: string;
  buttonClassName?: string;
  calendarId?: string;
  calendarClassName?: string;
  year?: number;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface MonthPickerProps {
  title?: string;
  buttonId?: string;
  buttonClassName?: string;
  month?: number;
  setMonth: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface YearMonthPickerProps {
  title?: string;
  buttonId?: string;
  buttonClassName?: string;
  date: dateType;
  setDate: React.Dispatch<React.SetStateAction<dateType>>;
}

export interface CalendarProps {
  axis?: {
    y: number;
    x: number;
  };
  open?: boolean;
  date?: number;
  handleDate?: (e: number) => void;
  id?: string;
  className?: string;
  backgroundColor?: string;
  focusColor?: string;
  ref?: React.LegacyRef<HTMLDivElement>;
}

export interface DatePickerButtonProps {
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  className?: string;
}
