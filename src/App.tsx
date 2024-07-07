import React from "react";
import { DatePicker } from "./lib/date-picker";
import { DatePickerType } from "./lib/date-picker-types";
export function App() {
  const [month, setMonth] = React.useState<number>();
  const [year, setYear] = React.useState<number>();
  const [date, setDate] = React.useState<DatePickerType>({
    year: undefined,
    month: undefined,
  });
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Year date Picker</h1>
      <DatePicker type="MONTH" month={month} setMonth={setMonth} />

      <div style={{ padding: "50px 0" }} />

      <DatePicker type="YEAR" year={year} setYear={setYear} />

      <div style={{ padding: "50px 0" }} />

      <DatePicker type="YEAR_MONTH" date={date} setDate={setDate} />
    </main>
  );
}
