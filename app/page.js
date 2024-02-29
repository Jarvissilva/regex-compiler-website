"use client";
import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { H1, H2, H3, P } from "components/content";

export default function Page() {
  const [regex, setRegex] = useState({ text: "", flags: "" });
  const [testString, setTestString] = useState("");

  const addFlags = (e) => {
    setRegex({
      ...regex,
      flags: e.target.checked
        ? regex.flags + e.target.value
        : regex.flags.replace(e.target.value, ""),
    });
  };

  const regexPattern = new RegExp(regex.text, regex.flags);
  const highlightedText = testString.replace(
    regexPattern,
    '<span class="bg-blue-400">$&</span>'
  );

  return (
    <main className="px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.25rem,6vw,3rem)] lg:px-[clamp(6rem,16vw,16rem)] bg-sky-50">
      <div className="text-center mb-5">
        <H1>Regex Compiler</H1>
      </div>
      <div className="flex flex-col gap-5 bg-white p-[clamp(1.25rem,5vw,2rem)] border border-gray-200 rounded-md">
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="regular-expression" className="font-semibold">
              Enter Regular Expression
            </label>
            <div className="flex items-center gap-2 p-4  border border-gray-200 rounded-md outline-none">
              <div>/</div>
              <input
                type="text"
                id="regular-expression"
                className="w-full  outline-none"
                onChange={(e) => setRegex({ ...regex, text: e.target.value })}
              />
              <div>/</div>
              <div>{regex.flags}</div>
              <button
                className="border-l border-gray-200 pl-2"
                onClick={() => navigator.clipboard.writeText(regexPattern)}
                title="Copy"
                aria-label="Copy"
              >
                <RiFileCopyLine size={20} className="hover:text-blue-500" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="font-semibold">Flags:</label>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="global-flag"
                value="g"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("g")}
              />
              <label htmlFor="global-flag">Global (g)</label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="multi-line-flag"
                value="m"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("m")}
              />
              <label htmlFor="multi-line-flag">Multi Line (m)</label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="case-insensitive-flag"
                value="i"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("i")}
              />
              <label htmlFor="case-insensitive-flag">
                Case Insensitive (i)
              </label>
            </div>

            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="single-line-flag"
                value="s"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("s")}
              />
              <label htmlFor="single-line-flag">Single Line (s)</label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="unicode-flag"
                value="u"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("u")}
              />
              <label htmlFor="unicode-flag">Unicode (u)</label>
            </div>
            <div className="flex justify-center items-center gap-1">
              <input
                type="checkbox"
                id="sticky-flag"
                value="y"
                className="p-4 border border-gray-200 rounded-md outline-none"
                onChange={addFlags}
                checked={regex.flags.includes("y")}
              />
              <label htmlFor="sticky-flag">Sticky (y)</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="test-string" className="font-semibold">
              Test String
            </label>
            <textarea
              className="p-4 border border-gray-200 rounded-md outline-none min-h-[200px]"
              id="test-string"
              onChange={(e) => setTestString(e.target.value)}
            ></textarea>
            <pre className="bg-sky-50 p-4 mt-2 rounded-md max-h-[300px] overflow-y-auto">
              <code
                className=""
                dangerouslySetInnerHTML={{
                  __html: highlightedText,
                }}
              />
            </pre>
          </div>
        </div>
        <div className="w-full space-y-5">
          <H2>About This Regex Compiler</H2>
          <P>
            A simple to use online regex tester or compiler tool, Enter your
            regular expression, select the flags you want and enter a test
            string and you will instantly see how your pattern matches the test
            string, helping you improve your regex for accuracy.
          </P>
          <P>
            It is simple, quick and perfect for building, testing and debugging
            your regex, Try it now and supercharge your text matching tasks.
          </P>
          <H2>Regex Documentation</H2>
          <P>
            Discover the foundational elements of building a regular expression,
            including basic syntax, quantifiers, special characters and flags.
          </P>
          <H3>Basic Syntax</H3>
          <table className="w-full">
            <thead className="text-left">
              <tr className="font-thin">
                <th className="border border-gray-200 p-3 sticky left-0 z-20 bg-white whitespace-nowrap">
                  Syntax
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Description
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  .
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches any single character.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  a.b matches "aab"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  ^
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches the start of a line or string.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  ^Hello matches "Hello, world!"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  $
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches the end of a line or string.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  world!$ matches "Hello, world!"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  []
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Defines a character set.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  [aeiou] matches "a" in "apple"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  [^]
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Defines a negated character set.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  [^0-9] matches any non-digit.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  |
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Acts as an OR operator.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  cat|dog matches "cat" or "dog"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  ()
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Groups expressions
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  (abc)+ matches "abcabc"
                </td>
              </tr>
            </tbody>
          </table>
          <H3>Quantifiers</H3>
          <table className="w-full">
            <thead className="text-left">
              <tr className="font-thin">
                <th className="border border-gray-200 p-3 sticky left-0 z-20 bg-white whitespace-nowrap">
                  Syntax
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Description
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  *
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches zero or more occurrences of the previous character or
                  group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  a*b matches "b", "aab", "aaab"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  +
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches one or more occurrences of the previous character or
                  group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  a+b matches "aab", "aaab"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  ?
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches zero or one occurrence of the previous character or
                  group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  colou?r matches "color" or "colour"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  {`{n}`}
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches exactly 'n' occurrences of the previous character or
                  group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  x{3} matches "xxx"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  {`{n,}`}
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches 'n' or more occurrences of the previous character or
                  group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  x{`{2,}`} matches "xx", "xxx", "xxxx"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  {`{(n, m)}`}
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches between 'n' and 'm' occurrences of the previous
                  character or group.
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  x{(2, 4)} matches "xx", "xxx", "xxxx"
                </td>
              </tr>
            </tbody>
          </table>
          <H3>Special Characters</H3>
          <table className="w-full">
            <thead className="text-left">
              <tr className="font-thin">
                <th className="border border-gray-200 p-3 sticky left-0 z-20 bg-white whitespace-nowrap">
                  Syntax
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  \
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Escapes a special character; for example, \\ matches a literal
                  backslash.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  .
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches any character except a newline (if not escaped).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  \d
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches any digit (equivalent to [0-9]).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  \w
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches any word character (equivalent to [a-zA-Z0-9_]).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  \s
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches any whitespace character.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  \t, \n, \r
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Matches tab, newline, and carriage return characters.
                </td>
              </tr>
            </tbody>
          </table>
          <H3>Flags</H3>
          <table className="w-full">
            <thead className="text-left">
              <tr className="font-thin">
                <th className="border border-gray-200 p-3 sticky left-0 z-20 bg-white whitespace-nowrap">
                  Flag
                </th>
                <th className="border border-gray-200 p-3 sticky right-0 z-20 bg-white whitespace-nowrap">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  g
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Global search; finds all occurrences of a pattern.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  i
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Case-insensitive search; ignores case when matching.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  m
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Multi-line search; treats each line as a separate string.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  s
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Allows '.' to match any character, including newline
                  characters. (Not widely supported)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  u
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  Enables full Unicode matching.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2 sticky left-0 z-20 bg-white">
                  y
                </td>
                <td className="border border-gray-200 p-2 sticky right-0 z-20 bg-white">
                  "Sticky" mode; matches only from the index indicated by the
                  lastIndex property.
                </td>
              </tr>
            </tbody>
          </table>
          <P>
            Use the above documentation and create amazing regular expressions,
            I hope you found this tool helpful and thank you for using our regex
            compiler.
          </P>
        </div>
      </div>
    </main>
  );
}
