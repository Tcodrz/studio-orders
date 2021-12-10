export function isSubStringInString(sub: string, str: string): boolean {
  return str.includes(sub);
}
export function isSubStringInStrings(str: string, aStr: string[]): boolean {
  return aStr.some(s => s.includes(str));
}
