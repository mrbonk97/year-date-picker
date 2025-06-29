import "./App.css";
import { useState } from "react";
import { YearMonthPicker, type YearMonthType } from "./lib";
import { HighlightCode } from "./highlight-code";
import { INSTALL, USAGE } from "./constants";

type ModeOptionType = "year" | "month" | "year-month";
const MODE_OPTIONS = ["year", "month", "year-month"] as const;

function App() {
  const [mode, setMode] = useState<ModeOptionType>("year");
  const [date, setDate] = useState<YearMonthType>({ year: null, month: null });

  function changeMode(m: ModeOptionType) {
    setMode(m);
    setDate({ year: null, month: null });
  }

  return (
    <>
      <nav>ymp</nav>

      <header>
        <h1>Year Month Picker</h1>
        <h4 className="mt-2 opacity-70">
          A lightweight React library for picking a year, month, or both with ease!
        </h4>
      </header>
      <main>
        <section>
          <h2>Example</h2>
          <div className="mt-5 picker-container">
            <YearMonthPicker date={date} setDate={setDate} mode={mode} />
          </div>
          <ul className="mt-5 option-container">
            {MODE_OPTIONS.map((item: ModeOptionType) => (
              <li key={item} onClick={() => changeMode(item)} aria-pressed={mode == item}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Installation</h2>
          <HighlightCode lang="shell" code={INSTALL} />
        </section>

        <section>
          <h2>Usage</h2>
          <p className="mt-2 opacity-70">Please import css file explicitly</p>
          <HighlightCode lang="javascript" code={USAGE} />
        </section>

        <section>
          <h2>API Reference</h2>
          <div className="mt-5 reference-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>mode</td>
                  <td>year | month | year-month</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>date</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>setDate</td>
                  <td>{`Dispatch<SetStateAction<YearMonthType>>`}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>id</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>inputClassName</td>
                  <td>string</td>
                  <td>ymp-input</td>
                </tr>
                <tr>
                  <td>containerClassName</td>
                  <td>string</td>
                  <td>ymp-container</td>
                </tr>
                <tr>
                  <td>headerClassName</td>
                  <td>string</td>
                  <td>ymp-header</td>
                </tr>
                <tr>
                  <td>bodyContainerClassName</td>
                  <td>string</td>
                  <td>ymp-body-container</td>
                </tr>
                <tr>
                  <td>bodyClassName</td>
                  <td>string</td>
                  <td>ymp-body</td>
                </tr>
                <tr>
                  <td>buttonClassName</td>
                  <td>string</td>
                  <td>ymp-button</td>
                </tr>
                <tr>
                  <td>message</td>
                  <td>string</td>
                  <td>Pick a date</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <section>
          <p>
            Made by{" "}
            <a href="https://mrbonk97.github.io" target="_blank" rel="noopener noreferrer">
              @mrbonk97
            </a>
          </p>
          <ul className="link-container">
            <li>
              <a
                href="https://github.com/mrbonk97/year-month-picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/year-month-picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default App;
