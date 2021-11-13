
export interface Order {
  _id: string;
  orderNumber: string;
  price : {
    collection: [];
    detailed: boolean;
    fullPrice: number;
    discount: number;
  },
  date: string;
  campaign: string;
  status: string;
  type: string;
  invoiceNumber: number;
  generalNotes: string;
  bookkeepingNotes: string;
  narratorsPrice: number;
  numberOfVersion: number;
  numberOfVariations: number;
  usagePeriod: number;
  music: string;
  customer: object;
  advertiser: object;
  contact: object;
}
