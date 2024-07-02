import { useState } from "react";
import { MonthPicker } from "./lib/picker/month-picker";
import { YearPicker } from "./lib/picker/year-picker";
import { YearMonthPicker } from "./lib/picker/year-month-picker";
import { PickerPicker, PickerPickerProps } from "./lib/picker/picker-picker";
import { dateType } from "./lib/types/react-year-gogo-types";

export type Ym = {
  year: number | undefined;
  month: number | undefined;
};

function App() {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<dateType>({
    year: undefined,
    month: undefined,
  });
  return (
    <main className="pl-40 pt-60 min-h-full bg-rose-50">
      <PickerPicker
        type="MONTH"
        date={date}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        setDate={setDate}
      />
      {/* <MonthPicker
        month={month}
        setMonth={setMonth}
        title={month?.toString()}
      />

      <hr className="py-6 my-6" />

      <YearPicker year={year} setYear={setYear} title={year?.toString()} />

      <hr className="py-6 my-6" />

      <YearMonthPicker date={date} setDate={setDate} /> */}
    </main>
  );
}

export default App;
