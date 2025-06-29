export const INSTALL = "npm install year-month-picker";

export const USAGE = `import "year-month-picker/style.css";
import { useState } from "react";
import { YearMonthPicker, YearMonthType } from "year-month-picker";

export default function Example() {
  const [date, setDate] = useState<YearMonthType>({ year: null, month: null });

  return (
    <main>
      <YearMonthPicker date={date} setDate={setDate} mode="year" />
      <YearMonthPicker date={date} setDate={setDate} mode="month" />
      <YearMonthPicker date={date} setDate={setDate} mode="year-month" />
    </main>
  );
}`;
