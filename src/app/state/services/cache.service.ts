import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  setItem<T>(key: string, item: T): void {
    sessionStorage.setItem(key.toLowerCase(), JSON.stringify(item));
  }

  getItem<T>(key: string): T | null {
    console.log(key);
    const item = sessionStorage.getItem(key.toLowerCase());
    if (item)
      return JSON.parse(item);
    else
      return null;
  }

  isItemInCache(key: string): boolean {
    const item = this.getItem(key);
    return item ? true : false;
  }

}
