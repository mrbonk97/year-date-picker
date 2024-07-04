# React Year/Month Date Picker UI Library

This library provides a datepicker for selecting a year, month, or both!

Check out the Example Website [https://github.asdasd](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

## Example

**Month Calendar**

https://github.com/mrbonk97/react-year-picker-gogo/assets/60309133/633804dd-28fe-4abd-bfed-cbb56a6de788

**Year Month Calendar**

https://github.com/mrbonk97/react-year-picker-gogo/assets/60309133/cb108f33-9acb-40a3-a3ed-133ec78aa1dc

## Installation

Install the library from your command line.

```shell
npm install react-year-date-picker
```

## Usage

- year picker

```js
import { useState } from "react";
import { DatePicker } from "react-year-date-picker";

function App() {
  const [year, setYear] = useState<number>();

  return (
    <DatePicker type="YEAR" year={year} setYear={setYear} />
  );
}

export default App;
```

- month picker

```js
import { useState } from "react";
import { DatePicker } from "react-year-date-picker";

function App() {
  const [month, setMonth] = useState<number>();

  return (
    <DatePicker
      type="YEAR_MONTH"
      locale="ko-KR"
      month={month}
      setMonth={setMonth}
    />
  );
}

export default App;
```

- year-month picker

```js
import { useState } from "react";
import { DatePicker, DatePickerType } from "react-year-date-picker";

function App() {
  const [date, setDate] =
    useState <
    DatePickerType >
    {
      year: undefined,
      month: undefined,
    };

  return <DatePicker type="YEAR_MONTH" date={date} setDate={setDate} />;
}

export default App;
```

## API Reference

| Props             | Type                        | default     |
| ----------------- | --------------------------- | ----------- |
| title             | string                      | Pick a date |
| type              | YEAR or MONTH or YEAR_MONTH | -           |
| locale            | string                      | en-US       |
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

### locale

```js
new Date(2000, month - 1).toLocaleString(locale, { month: "long" });
```

Above is the code used in date picker

to set the correct locale,
refer to the toLocaleString documentation for the appropriate locale format and pass it to the locale prop.
