export function isSubStringInString(sub: string, str: string): boolean {
  return str.includes(sub);
}
export function isSubStringInStrings(str: string, aStr: string[]): boolean {
  return aStr.some(s => s.includes(str));
}
export function forceHebrew(value: string): string {
  const aTranslateItems = [
    { en: 't', he: 'א' },
    { en: 'c', he: 'ב' },
    { en: 'd', he: 'ג' },
    { en: 's', he: 'ד' },
    { en: 'v', he: 'ה' },
    { en: 'u', he: 'ו' },
    { en: 'z', he: 'ז' },
    { en: 'j', he: 'ח' },
    { en: 'y', he: 'ט' },
    { en: 'h', he: 'י' },
    { en: "l", he: 'ך' },
    { en: 'f', he: 'כ' },
    { en: 'k', he: 'ל' },
    { en: 'o', he: 'ם' },
    { en: 'n', he: 'מ' },
    { en: 'i', he: 'ן' },
    { en: 'b', he: 'נ' },
    { en: 'x', he: 'ס' },
    { en: 'g', he: 'ע' },
    { en: ';', he: 'ף' },
    { en: 'p', he: 'פ' },
    { en: '.', he: 'ץ' },
    { en: 'm', he: 'צ' },
    { en: 'e', he: 'ק' },
    { en: 'r', he: 'ר' },
    { en: 'a', he: 'ש' },
    { en: ',', he: 'ת' }
  ];
  let hStr = '';
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i);
    const tItem = aTranslateItems.find(x => x.en === char || x.he === char);
    if (tItem) hStr = hStr + tItem.he;
  }
  return hStr;
}
