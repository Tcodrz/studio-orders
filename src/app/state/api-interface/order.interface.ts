
export interface Order {
  _id: string;
  id: string;
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
  customer: Customer;
  advertiser: Advertiser;
  contact: Contact;
  narrators: Narrator[];
}

type Narrator = {
  id: string | number;
  name: string;
}

type Advertiser = {
  id: number | string;
  name: string;
}

type Customer = {
  id: number| string;
  name: string;
}

type Contact = {
  id: number | string;
  name: string;
}
