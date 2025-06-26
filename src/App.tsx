import { useState } from "react";
import "./App.css";
import { YearMonthPicker, type YearMonthType } from "./rydp/picker";

function App() {
  const [date, setDate] = useState<YearMonthType>({ year: null, month: null });

  return (
    <main style={{ padding: 16 }}>
      <YearMonthPicker type="year" date={date} setDate={setDate} />
      <YearMonthPicker type="year-month" date={date} setDate={setDate} />
    </main>
  );
}

export default App;
