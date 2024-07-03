import { useState } from "react";
import { PickerPicker } from "./lib/picker/picker-picker";
import { DatePickerType } from "./lib/types/react-year-gogo-types";

function App() {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [date, setDate] = useState<DatePickerType>({
    year: undefined,
    month: undefined,
  });
  return (
    <main className="p-5">
      <PickerPicker
        month={month}
        setMonth={setMonth}
        type="MONTH"
        backgroundColor="bg-rose-300"
      />
      <div className="my-6 " />
      <PickerPicker year={year} setYear={setYear} type="YEAR" />
      <div className="my-6 " />
      <PickerPicker date={date} setDate={setDate} type="YEAR_MONTH" />
    </main>
  );
}

export default App;
