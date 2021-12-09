export function isSubStringInString(sub: string, str: string): boolean {
  return str.includes(sub);
}
export function isSubStringInStrings(str: string, aStr: string[]): boolean {
  return aStr.every(s => s.includes(str));
}
