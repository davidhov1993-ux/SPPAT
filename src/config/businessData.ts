export interface BusinessData {
  name: string;
  url: string;
  areaServed: string;
  telephone?: string;
  email?: string;
  taxID?: string;
  vatID?: string;
}

export const businessData: BusinessData = {
  name: "SPPAT",
  url: "https://www.sppat.nl",
  areaServed: "Nederland",
  // TODO: Add the following fields when real data is confirmed
  // telephone: "+31 ...",
  // email: "info@sppat.nl",
  // taxID: "NL...",
  // vatID: "NL...",
};
