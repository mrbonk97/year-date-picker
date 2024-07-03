# React Year/Month Date Picker UI Library

This library provides a datepicker for year and month or both!

Check out the Example Website [https://github.asdasd](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

you must have [tailwindcss](https://tailwindcss.com/) in you devDependencies to use this

## Example

Month Calendar

https://github.com/mrbonk97/react-year-picker-gogo/assets/60309133/a9569489-c8e8-43da-9ab3-5336498e9204

Year Month Calendar

https://github.com/mrbonk97/react-year-picker-gogo/assets/60309133/cb108f33-9acb-40a3-a3ed-133ec78aa1dc


## Installation

Install the library from your command line.

```shell
npm install react-year-picker-gogo
```

## Usage

```js
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
    <main>
      <PickerPicker
        month={month}
        title="This is a Example"
        setMonth={setMonth}
        type="MONTH"
      />

      <PickerPicker year={year} setYear={setYear} type="YEAR" />
      <PickerPicker
        date={date}
        locale="ko-KR"
        setDate={setDate}
        type="YEAR_MONTH"
      />
    </main>
  );
}

export default App;
```

## API Reference

| Props             | Type                        | default     |
| ----------------- | --------------------------- | ----------- |
| title             | string                      | Pick a date |
| type              | YEAR or MONTH or YEAR_MONTH | -           |
| locale            | string                      | en-us       |
| buttonId          | string                      | -           |
| buttonClassName   | string                      | -           |
| calendarId        | string                      | -           |
| calendarClassName | string                      | -           |
| backgroundColor   | string                      | -           |
| focusedColor      | string                      | -           |
| date              | DatePickerType              | -           |
| year              | number or undefined         | -           |
| month             | number or undefined         | -           |
| setDate           | React.useState              | -           |
| setYear           | React.useState              | -           |
| setMonth          | React.useState              | -           |
