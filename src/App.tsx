import { useState } from "react";
import { YearPickerButton } from "./lib/year-picker/year-picker-button";

function App() {
  const [selectedYear, setSelectedYear] = useState<number>();
  return (
    <main className="pl-40 pt-60 min-h-full bg-rose-50">
      <YearPickerButton
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </main>
  );
}

export default App;
