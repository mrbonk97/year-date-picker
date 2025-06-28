# Year Month Picker Library

A lightweight React library for picking a year, month, or both with ease!

<p align="center">
  <img src="https://github.com/user-attachments/assets/ba0dac7b-fc19-4ea1-b29d-e6171277f4f3" alt="calendar" />
</p>
<p align="center">
  🔗 <strong><a href="https://mrbonk97.github.io/year-month-picker">Check out the live demo</a></strong>
</p>

---

## Installation

Install via npm:

```shell
npm install year-month-picker
```

## Usage

```js
import "year-month-picker/style.css";

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
}
```

## API Reference

| Prop                   | Type                                      | Default            | Required |
| ---------------------- | ----------------------------------------- | ------------------ | -------- |
| mode                   | `"year"` \| `"month"` \| `"year-month"`   | year               | No       |
| date                   | `YearMonthType`                           | —                  | Yes      |
| setDate                | `Dispatch<SetStateAction<YearMonthType>>` | —                  | Yes      |
| message                | `string`                                  | Pick a date        | No       |
| disabled               | `boolean`                                 | false              | No       |
| id                     | `string`                                  | —                  | No       |
| inputClassName         | `string`                                  | ymp-input          | No       |
| containerClassName     | `string`                                  | ymp-container      | No       |
| headerClassName        | `string`                                  | ymp-header         | No       |
| bodyContainerClassName | `string`                                  | ymp-body-container | No       |
| bodyClassName          | `string`                                  | ymp-body           | No       |
| buttonClassName        | `string`                                  | ymp-button         | No       |
