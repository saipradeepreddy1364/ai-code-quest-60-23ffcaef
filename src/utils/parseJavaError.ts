export function parseJavaError(raw: string): string {
  if (!raw) return "";

  if (raw.includes("NoSuchElementException")) {
    return "Input Error: Your program tried to read input but stdin is empty.\n\nFix: Enter your input values in the stdin box on the left before clicking Run.\n\nExample: If your code calls sc.nextInt() twice, type two numbers like:\n5\n3";
  }

  if (raw.includes("ArrayIndexOutOfBoundsException")) {
    const match = raw.match(/Index (\d+) out of bounds for length (\d+)/);
    if (match) {
      return "Array Error: You tried to access index " + match[1] + " but the array only has " + match[2] + " element(s).\n\nFix: Check your loop bounds or array size.";
    }
    return "Array Error: You accessed an index outside the array bounds.\n\nFix: Check your loop bounds or array size.";
  }

  if (raw.includes("NullPointerException")) {
    return "Null Error: Your program tried to use an object that has not been initialized.\n\nFix: Make sure all objects are created with new before you use them.";
  }

  if (raw.includes("StackOverflowError")) {
    return "Stack Overflow: Your program has infinite recursion - a method keeps calling itself forever.\n\nFix: Check your recursive method for a proper base case.";
  }

  if (raw.includes("ClassCastException")) {
    return "Type Error: Your program tried to cast an object to an incompatible type.\n\nFix: Check your type casts and make sure objects are the type you expect.";
  }

  if (raw.includes("NumberFormatException")) {
    return "Number Format Error: Your program tried to convert a non-numeric string to a number.\n\nFix: Make sure your input contains only valid numbers where numbers are expected.";
  }

  if (raw.includes("StringIndexOutOfBoundsException")) {
    return "String Index Error: Your program accessed a character position that does not exist in the string.\n\nFix: Check your string length before accessing characters by index.";
  }

  if (raw.includes("error:") || raw.includes(".java:")) {
    return "Compilation Error:\n\n" + raw;
  }

  if (raw.includes("Exception") || raw.includes("Error")) {
    const firstLine = raw.split("\n")[0];
    return "Runtime Error: " + firstLine + "\n\nFull trace:\n" + raw;
  }

  return raw;
}
