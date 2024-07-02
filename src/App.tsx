import { useState } from "react";
import { PickerPicker } from "./lib/picker/picker-picker";
import { dateType } from "./lib/types/react-year-gogo-types";

function App() {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<dateType>({
    year: undefined,
    month: undefined,
  });
  return (
    <main className="pl-40 pt-60 min-h-full bg-rose-50">
      <PickerPicker type="YEAR" year={year} setYear={setYear} />
      <PickerPicker type="MONTH" month={month} setMonth={setMonth} />
      <PickerPicker type="YEAR_MONTH" date={date} setDate={setDate} />
    </main>
  );
}

export default App;
