export type DatePickerType = {
  year: number | undefined;
  month: number | undefined;
};

export interface BasicCalendarProps {
  id?: string;
  className?: string;
  open?: boolean;
  axis?: {
    y: number;
    x: number;
  };
}
