export interface PostData {
  fullUrl: string;
}

interface Url {
  _id: string;
  full: string;
  clicks: number;
  short: string;
  __v: number;
}

export interface ResponseData {
  url: Url;
  qrImageUrl: string;
}
