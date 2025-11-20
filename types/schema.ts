export interface Category {
  label: string;
  id: number;
}

export type UploadedFile = {
  file?: File;
  preview: string;
  url?: string;
};

export type NewTool = {
  name: string;
  website: string;
  description: string;
  shortDescription: string;
  paymentMethod: string;
  categories: Category[];
  companyInfo: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  reddit: string;
  twitter: string;
  ox: string;
  pinterest: string;
  logo: UploadedFile[];
  screenshots: UploadedFile[];
};
