# React Year/Month Date Picker UI Library

This library provides a datepicker for year and month or both!

Check out the Example Website [https://github.asdasd](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

you must have [tailwindcss](https://tailwindcss.com/) in you devDependencies to use this

## Example

Month Calendar

[![Watch the video](https://github.com/mrbonk97/react-year-picker-gogo/blob/main/public/images/month-picker.png)](https://github.com/mrbonk97/react-year-picker-gogo/blob/main/public/videos/month-picker.mp4)

Year Month Calendar

[![Watch the video](https://github.com/mrbonk97/react-year-picker-gogo/blob/main/public/images/year-month-picker.png)](https://github.com/mrbonk97/react-year-picker-gogo/blob/main/public/videos/year-month-picker.mp4)

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
